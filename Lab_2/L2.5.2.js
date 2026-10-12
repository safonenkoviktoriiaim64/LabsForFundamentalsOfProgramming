'use strict';

const phoneHash: Record<string, string> = {
    'Mark': '+380501112233',
    'Alex': '+380671112233',
    'Luka': '+380631112233'
};

function findPhoneByNameInHash(name: string): string | undefined {
    return phoneHash[name] || 'Не знайдено';
}

console.log('Array search (Mark):', findPhoneByName('Mark'));
console.log('Hash search (Luka):', findPhoneByNameInHash('Luka'));
console.log('Hash search (Unknown):', findPhoneByNameInHash('Alex'));
