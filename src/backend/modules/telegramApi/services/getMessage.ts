import { TelegramClient } from 'telegram';
import { EntityLike } from 'telegram/define';

async function getMessage(client: TelegramClient, user?: EntityLike) {
  const messageInfo = await client.getMessages(user, {
    limit: 5,
    filter: undefined
  });

  return messageInfo.map((element) => element.message);
}

export default getMessage;
