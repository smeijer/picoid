import generate from 'nanoid/generate';

const alphabet = '23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz';

function picoid(length: number = 17): string {
  return generate(alphabet, length);
}

export default picoid;