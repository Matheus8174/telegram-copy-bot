import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

import getMessage from './services/getMessage';
import readMessageFile from './services/readMessageFile';
import writeMessageFile from './services/writeMessageFile';
import sendMessageToGroup from './controller/sendMessageToGroup';

type ErrorMessage = {
  errorMessage: string;
  seconds: number;
};

(async () => {
  const session = new StringSession(process.env.SESSION_STRING);
  const client = new TelegramClient(
    session,
    Number(process.env.API_ID),
    process.env.API_HASH as string,
    { connectionRetries: 5 }
  );

  await client.connect();

  console.log('You should now be connected.');

  async function execute() {
    const newMessages = await getMessage(client, '@CornerProLiveTipsBot');

    const oldMessages: string[] = [];

    newMessages.reverse().forEach(async (message, _index) => {
      for (let index = 0; index < 5; index++) {
        oldMessages.push((await readMessageFile(index)).toString().trim());
      }

      if (!oldMessages.find((value) => message === value))
        await sendMessageToGroup(message?.trim() as string, client);

      await writeMessageFile(message?.trim() as string, _index);
    });
    setTimeout(() => execute(), 60000);
  }

  try {
    execute();
  } catch (error) {
    console.log('deu erro!');
    if ((error as ErrorMessage).errorMessage === 'FOOD') {
      console.log(`espere ${(error as ErrorMessage).seconds} segundos`);
      setTimeout(() => execute(), Number((error as ErrorMessage).seconds));
    } else {
      setTimeout(() => execute(), 30000);
      console.log(error);
    }
  }
})();
