// Тренируем навык работы с циклами и массивами
// Вам необходимо выполнить следующие операции над массивом чисел:
// Создайте пустой массив с именем numbers
// Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
// Используя циклы, выполните следующие операции над массивом numbers:
// Удалите все отрицательные числа из массива
// Возведите каждое число в квадрат
// Отсортируйте числа в порядке убывания
// Удалите повторяющиеся числа из массива
// Выведите полученный массив numbers в консоль
// ☝🏻
// При выполнении задания обратите внимание на правильное использование циклов, операции над массивами и соответствие результатов требуемым условиям

// Создайте пустой массив с именем numbers
const numbers = [];
document.writeln('<br>'+'создадим пустой массив' + ' ' + numbers);
// Заполните массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let i= -10; i <= 10; i++) {
    console.log(i);
    numbers.push(i);
}
document.writeln('<br>'+'заполним массив' + ' ' + numbers);
console.log(numbers);

// Используя циклы, выполните следующие операции над массивом numbers:
// Удалите все отрицательные числа из массива
// const numbers1 = [...numbers];

for(let i = numbers.length-1; i>=0; i--) {
    if (numbers[i] < 0) {
        numbers.splice(i,1);
    }
}
console.log(numbers);
document.writeln('<br>'+'удалим отрицательные числа' + ' ' + numbers);


// Возведите каждое число в квадрат
for (let i = 0; i<numbers.length; i++) {
    numbers[i] = i ** 2;
}
console.log(numbers);
document.writeln('<br>'+'возведем в квадрат' + ' ' + numbers);

// Отсортируйте числа в порядке убывания
for (let i = 0; i < numbers.length; i++ ) {
    for(let j = i; j <numbers.length; j++) {
        if(numbers[i]< numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log(numbers);

// numbers.sort(function (a, b) {
//     return b - a;   
//     })
// console.log(numbers);
document.writeln('<br>'+'отсортируем по убыванию' + ' ' + numbers)

document.writeln('<br>'+'повторяющихся значений нет')

