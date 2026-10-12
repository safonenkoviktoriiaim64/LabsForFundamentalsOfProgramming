'use strict';

function fn(): void {
    const constObj = { name: 'Перший' };
    
    let letObj = { name: 'Другий' };
    
    constObj.name = 'Змінений Перший';
    letObj.name = 'Змінений Другий';
    
    letObj = { name: 'Новий обєкт' };      
}

function createUser(name: string, city: string): object {
    return { name, city };
}

fn();
console.log('createUser:', createUser('Marcus Aurelius', 'Roma'));
