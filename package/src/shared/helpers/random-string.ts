const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
const CHARS_LENGTH = CHARS.length;

function randomString(): string {
  const results = [];
  for (let i = 0; i < 12; i++) {
    results.push(CHARS.charAt(Math.floor(Math.random() * CHARS_LENGTH)));
  }

  return results.join('');
}

export { randomString };
