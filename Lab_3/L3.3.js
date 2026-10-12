'use strict';

function ipToInt(ip = '127.0.0.1') {
  if (typeof ip !== 'string') {
    throw new TypeError('IP-адреса має бути рядком');
  }

  return ip.split('.').reduce((acc, octet, index) => {
    const num = parseInt(octet, 10);
    
    if (isNaN(num) || num < 0 || num > 255) {
      throw new Error('Некоректний формат IP-адреси');
    }

    const shift = (3 - index) * 8;
    
    return acc + (num << shift);
  }, 0);
}

console.log('\n--- 3. Перетворення IPv4-адреси на число ---');
console.log('127.0.0.1 ->', ipToInt('127.0.0.1')); 
console.log('10.0.0.1 ->', ipToInt('10.0.0.1'));
console.log('192.168.1.10 ->', ipToInt('192.168.1.10'));
console.log('За замовчуванням ->', ipToInt()); 
