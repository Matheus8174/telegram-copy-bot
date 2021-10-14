import { resolve as resolvePath } from 'path';
import { readFile } from 'fs';

function readMessageFile(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      readFile(
        resolvePath(__dirname, '../', 'vars/currentMessage.txt'),
        (error, data) => {
          if (error) throw new Error(error.message);

          resolve(data);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export default readMessageFile;
