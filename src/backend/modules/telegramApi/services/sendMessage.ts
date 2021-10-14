import { TelegramClient } from 'telegram';

type elementsToMessage = {
  competicao: string;
  jogo: string;
  tempo: string;
  ataquesPerigosos: string;
  cantos: string;
  posseBola: string;
  rematesBaliza: string;
  rematesLado: string;
  url: string;
};

async function sendMessage(
  client: TelegramClient,
  {
    jogo,
    competicao,
    tempo,
    ataquesPerigosos,
    cantos,
    posseBola,
    rematesBaliza,
    rematesLado,
    url
  }: elementsToMessage
) {
  const newMessage = `
🏟 <b>${jogo}
<b>${competicao}

🕛 <b>${tempo} min

⚔ <b>${ataquesPerigosos}

⛳ <b>${cantos}

⚖ <b>${posseBola}

🥅 <b>${rematesBaliza}

➡ <b>${rematesLado}

<b>${url}

🚨 +0.5 HT
  `;

  client.setParseMode('html');

  await client.sendMessage(-1001404658451, {
    message: newMessage.trim(),
    parseMode: 'html'
  });
}

export default sendMessage;
