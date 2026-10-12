'use strict';

function introspectObject(iface) {
  if (iface === null || typeof iface !== 'object') {
    throw new TypeError('Аргумент має бути об\'єктом');
  }

  const result = [];

  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }

  return result;
}

console.log('\n--- 4. Інтроспекція об\'єкта ---');
const iface = {
  m1: x => [x],
  m2: function (x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; },
  num: 42,           
  str: 'text'       
};

console.log('introspectObject(iface):', introspectObject(iface));
