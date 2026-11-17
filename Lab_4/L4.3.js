function ages(persons) {
    const result = {};
    for (const name in persons) {
        result[name] = persons[name].died - persons[name].born;
    }
    return result;
}

// Об'єкт з датами народження та смерті
const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 }
};

// Перевірка функції
console.log(ages(persons));

// Результат виконання функції
{
    lenin: 54,
    mao: 83,
    gandhi: 79,
    hirohito: 88
}
