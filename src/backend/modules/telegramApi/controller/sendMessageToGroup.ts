import { TelegramClient } from 'telegram';

import insertTextInMessage from '../utils/insertTextInMessage';
import sendMessage from '../services/sendMessage';

async function sendMessageToGroup(message: string, client: TelegramClient) {
  const jogo = message
    .substring(message.indexOf('Jogo:'), message.lastIndexOf('Competição:'))
    .trim();

  const competicao = message
    .substring(message.indexOf('Competição:'), message.lastIndexOf('Tempo:'))
    .trim()
    .split('\n')[0];

  const tempo = message
    .substring(message.indexOf('Tempo:'), message.indexOf("'"))
    .trim();

  const ataquesPerigosos = message
    .substring(message.indexOf('Ataques Perigosos:'), message.indexOf('- 1º'))
    .trim();

  const cantos = message
    .substr(message.indexOf('Cantos:'), message.indexOf('\n'))
    .trim()
    .split('\n- 1ºP')[0];

  const posseBola = message
    .substring(message.indexOf('Posse bola:'))
    .trim()
    .split('\n- 1ºP')[0];

  const rematesBaliza = message
    .substring(message.indexOf('Remates Baliza:'))
    .trim()
    .split('\n- 1ºP')[0];

  const rematesLado = message
    .substring(message.indexOf('Remates lado:'))
    .trim()
    .split('\n- 1ºP')[0];

  const url = message.slice(message.indexOf('https://bet365')).trim();

  return await sendMessage(client, {
    jogo: insertTextInMessage(jogo, '</b>', 5),
    competicao: insertTextInMessage(competicao, '</b>', 11),
    tempo: insertTextInMessage(tempo, '</b>', 6),
    ataquesPerigosos: insertTextInMessage(ataquesPerigosos, '</b>', 18),
    cantos: insertTextInMessage(cantos, '</b>', 7),
    posseBola: insertTextInMessage(posseBola, '</b>', 11),
    rematesBaliza: insertTextInMessage(rematesBaliza, '</b>', 15),
    rematesLado: insertTextInMessage(rematesLado, '</b>', 13),
    url: url.slice(0, url.indexOf('\n'))
  });
}

export default sendMessageToGroup;
