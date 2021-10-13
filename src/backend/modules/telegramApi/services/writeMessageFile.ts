import { resolve as resolvePath } from 'path';
import { writeFile } from 'fs';

function writeMessageFile(message: string) {
  return new Promise((resolve, reject) => {
    try {
      writeFile(
        resolvePath(__dirname, '../', 'vars/currentMessage.txt'),
        message,
        {},
        (error) => {
          if (error) throw new Error(error.message);
          resolve(true);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

export default writeMessageFile;
