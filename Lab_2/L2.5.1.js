'use strict';

interface Person {
    name: string;
    phone: string;
}

const phoneBook: Person[] = [
    { name: 'Mark', phone: '+380501112233' },
    { name: 'Alex', phone: '+380671112233' },
    { name: 'Luka', phone: '+380631112233' }
];

function findPhoneByName(name: string): string | undefined {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    return 'Не знайдено';
}
