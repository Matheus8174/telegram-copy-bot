import { resolve as resolvePath } from 'path';
import { readFile } from 'fs';

function readMessageFile(index: number): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      readFile(
        resolvePath(__dirname, '../', `vars/${index}Message.txt`),
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
