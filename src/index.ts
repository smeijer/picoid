import { customAlphabet } from 'nanoid';

const alphabet = '23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz';
const generate = customAlphabet(alphabet);

function picoid(length: number = 17): string {
  return generate(length);
}

export default picoid;
