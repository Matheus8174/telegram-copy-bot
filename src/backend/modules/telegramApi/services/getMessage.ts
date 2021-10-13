import { TelegramClient } from 'telegram';
import { EntityLike } from 'telegram/define';

function getMessage(client: TelegramClient, user?: EntityLike) {
  return client.getMessages(user, {
    limit: undefined,
    filter: undefined
  });
}

export default getMessage;
