'use strict';

function generateKey(length, characters) {
  if (typeof length !== 'number' || length <= 0) {
    throw new Error('Довжина має бути додатним числом');
  }
  if (typeof characters !== 'string' || characters.length === 0) {
    throw new Error('Набір символів має бути непорожнім рядком');
  }

  let key = '';
  const charsLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsLength);
    key += characters[randomIndex];
  }

  return key;
}

console.log('\n--- 2. Генерація випадкового ключа ---');
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log('generateKey(16):', generateKey(16, characters));
