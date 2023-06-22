//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
    console.log('задание 1', i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0){
        console.log('задание 2', i);
    }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i >= 1; i--) {
    console.log('задание 3', i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
let  i = 0;
while(i<10) {
    i++;
    console.log('задание 4', i*5);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let res = 0;

for (let i = 1; i <= 100; i++) {
	res += i;
}

console.log('задание 5', res);



//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 1; i <= array.length; i++)
console.log('задание 6', i);

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 1; i <= 5; i++){
    sum +=i;
}
console.log('задание 7', sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++){
    const animal = animals[i];
    const newAnimals = animal + " - прекрасное животное";
    animals[i] = newAnimals;
    console.log('задание 8', newAnimals);
}


//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let symbol of str){
    console.log('задание 9', symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let element of array){
    console.log('задание 10', element);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (let i = 0; i < sentences.length; i++){
    const sentence = sentences[i].split(' ');
    sentence.forEach((item)=>{
        console.log('задание 11', item);
    })
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum1 = 0;
for (let number of numbers){
    sum1 += number;
}
console.log('задание 12',sum1);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let i = 0; i < list.length; i++){
    console.log('задание 13', list[i].length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words1 = ['Hello', 'world', '!'];
let words2 = words1.slice();
for (let i = 0; i < words1.length; i++) {
    const word = words2[i];
    const newWords = word.toUpperCase();
    words2[i] = newWords;
}
console.log('задание 14', words2);


//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';

let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

function findVowels(str) {
    for (let el of str.toLowerCase()) {
        if(vowels.includes(el)) {
            vowelCount +=1;
        }
    }
    return vowelCount;
}

console.log('задание 15', findVowels(greeting));


//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
let string = words.join(' ');
console.log('задание 16', string);


//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let s = 1;
while (s <=10){
    console.log('задание 17', s)
    s++
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let p = 10;
while (p >= 1){
    console.log('задание 18', p)
    p--
}

//Задание 19 //не поняла как сделать через while
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let Positive = allNumbers.every(function(value) {
    return value >= 0;
    })
    console.log('задание 19', Positive);



//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let r = 0;
do {
    console.log('задание 20', random[r]);
    r++;
}
while (random[r] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let h = 1;
do{
    if(h % 3 !== 0) {
        console.log('задание 21', h);
    }
    h++;
} while(h <= 100)


//Задание 22// не поняла
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let sum2 = 0;
// let num = 0;
// do{
//     sum2 = sum2 + num;
//     num = parseInt(prompt('Введите число: '));
// }
// while (sum2 < 100);

// console.log(sum);

// let sum = 0;

// while (true) {

// let value = +prompt("Введите число", '');

// if (!value)
//   break; // (*)

// sum += value;

// }
// alert( 'Сумма: ' + sum );

// let total = 0;
// let value = +prompt("Введите число", '');
//  if (total > 100) {
//     console.log('too much');
//  } else {
//     total += value;
//     console.log(total);
//  }

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const className = document.getElementsByTagName('h4');
for (let element of className) {
    element.classList.add ('title');
    let color = 'lightblue';
    element.style.backgroundColor = color;
}

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

while (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log('задание 24' , randomString);
