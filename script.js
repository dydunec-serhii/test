
// const lang = prompt('введіть вашу мову');
// switch (true) {
//   case ua:
//     console.log(December);
//     break;
//   case en:
//     console.log(October);
//     break;
//   case ru:
//     console.log(November);
//     break;
//   case fr:
//     console.log(Jenuary);
//     break;
//   default:
//     console.log('your language is nit indefinded');
// }
// ПЕРШЕ ЗАВДАННЯ
// const drink = prompt("виберіть чай каву чи сік");
// switch (drink) {
//   case 'tea':
//     console.log('нате пийте свій чайок');
//   break;
//   case 'coffe':
//     console.log('нате пийте свою каву');
//     break;
//     case 'juce':
//       console.log('нате пийте свій сік');
//       break;
//       default:
//         console.log('такого напію немає в меню :(');
// }
// ДРУГЕ ЗАВДАННЯ
// const week = prompt("введіть назву вашого дня!");
// switch (week) {
//   case 'понеділок':
//   case 'вівторок':
//   case 'середа':
//   case 'четвер':
//   case 'пятниця':
//     console.log("ваш день робочий!");
//     break;
//   case 'субота':
//   case 'неділя':
//     console.log("ваш день вихіддний!");
//     break;
//   default:
//     console.log("вашого дня не знайдено :(");
// }
// ТРЕТЄ ЗАВДАННЯ
// const month = 12;
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log('зима');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('весна');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('літо');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('осінь');
//     break;
//   default:
//     console.log('ми не знайшли ваш місяць :(');
//     break;
// }
// ЧЕТВЕРТЕ ЗАВДАННЯ
// const color = prompt("введіть свй колір");
// switch (color) {
//   case 'red':
//     console.log("стояти");
//     break;
//   case 'orange':
//     console.log("приготуйтесь");
//     break;
//   case 'green':
//     console.log("можете рушати!");
//     break;
//   default:
//     console.log("ми не знайли вашого світлофора");
//     break;
// }
// ПЯТЕ ЗАВДАННЯ
// let  counter = 0;
// while (counter < 10) {
//    console.log(counter);
//     counter += 1;
// }
// let password = '123';
// do {
//     password = prompt('your password')
// } while (password.length < 5) {
//     console.log('суперр!' , password);
// } 

// let a = 0;
// let b = 0;
// while (a < gray.length) {
//     b += gray[a];
//     a += 1;
// }
// rest = b / gray.length;
// if (rest < 7) {
//     console.log('job dont');
// }
// console.log(rest);
// let total = 0;
// let gray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const max = 10;
// for (let i = 1; i < max; i++) {
//     total += gray[i]
// }
// console.log(total);
// const num = 10;
// for (let index = 0; index < num; index++) {
//     if (index % 2 === 0) {
//         continue;
//     }
//     console.log(index);
// }
// const text = prompt('введіть число більше 100');
// if (text < 100) {
//     console.log('введіть число більше 100 !!!!');
// } else {
//     console.log('все класно');
// }
// const text2 = prompt('введіть число більше 100');
// do {
// text2 < 100;
// console.log('введіть число більше 100!!!!');
// } while (text2) {
//     console.log('все топово');
// }
// let text = prompt('введіть число більше 100');
// while (Number(text) < 100) {
//     text = prompt('введіть число більше 100');
// }
// console.log('все чудово!');
// const employees = 5;
// let totalSalary = 0;
// for (let i = 1; i <= employees; i++) {
//     let selery =  Math.random() * (5000 - 500 + 1);
//     totalSalary += selery;
//     console.log(`Працівник ${i}: ${salary} грн`);
// }
// console.log(`Загальна сума зарплат: ${totalSalary} грн`);
// Кількість працівників
// const employees = 10;
// let totalSalary = 0;
// for (let i = 1; i <= employees; i++) {
//     let salary = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
//     totalSalary += salary;

//     console.log(`Працівник ${i}: ${salary} грн`);
// }
// console.log(`Загальна сума зарплат: ${totalSalary} грн`);

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }
// let nume = 20;
// for (let i = 0; i < nume; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
// let add = 7;
// for (let i = 0; i <= 10;  i++) {
//   add * i;
//   console.log(add * i);
// }
// let n = 25;
// for (let i = 1; i <= 30; i++) {
//    if (i >= n) {
//     break;
//    }
//     console.log(i);
// }
// let i = 1;
// while (i <= 20) {
//     if ( i % 3 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++
// }
// const text1 = prompt('введіть ваш текст!');
// const text2 = prompt('введіть ваш текст!');
// const num = [1, 2, 3, 4, 5];
// const x = x => x > 2;
// console.log(num.some(x));
// console.log(num.find(x => x > 3));
// console.log(num.filter(x => x > 3));
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// console.log(players.find(elemet => players.id = 'player-1'))
// console.log(players.find(elemen => players.name = 'Poly'));
// console.log(players.every(element => players.timePlayed > 200));
// console.log(players.every(elemen => players.online = true));
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num.filter(ele => ele % 2 === 0));
// function nume(arr) {
//     let x = 0;
//     for (let i = 0; i < num.length; i++) {
//         const para = Math.num % 2 === 0;

//     }
// }
// const people = [
//     { name: 'John', age: 32, occupation: 'programmer' },
//     { name: 'Jane', age: 26, occupation: 'teacher' },
//     { name: 'Mike', age: 42, occupation: 'engineer' },
//     { name: 'Emily', age: 17, occupation: 'designer' }
//   ];
//   console.log(people.filter( ele => ele.age > 18).map(ele => ele.name));
// const users = [

//     {

//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081', name: 'Moore Hensley', email: 'moorehensley@indexia.com',
//         eyeColor: 'blue', friends: ['Sharron Pace'], isActive: false, balance: 2811, skills: ['ipsum', 'lorem'],
//         gender: 'male', age: 37,

//     },

//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1', name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue', friends: ['Briana Decker', 'Sharron Pace'], isActive: true,
//         balance: 3821, skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'], gender: 'female', age: 34,

//     },

//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3', name: 'Ross Vazquez', email: 'rossvazquez@xinware.com',
//         eyeColor: 'green', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'], isActive: false,
//         balance: 3793, skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'], gender: 'male', age: 24,

//     },

//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5', name: 'Elma Head', email: 'elmahead@omatom.com',
//         eyeColor: 'green', friends: ['Goldie Gentry', 'Aisha Tran'], isActive: true, balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'], gender: 'female', age: 21,

//     },

//     {

//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70', name: 'Carey Barr', email: 'careybarr@nurali.com',
//         eyeColor: 'blue', friends: ['Jordan Sampson', 'Eddie Strong'], isActive: true,
//         balance: 3951, skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male', age: 27,

//     },

//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695', name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown', friends: ['Jacklyn Lucas', 'Linda Chapman'], isActive: false, balance: 1498,
//         skills: ['non', 'amet', 'ipsum'], gender: 'male', age: 38,

//     },

//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812', name: 'Sheree Anthony', email: 'shereeanthony@kog.com',
//         eyeColor: 'brown', friends: ['Goldie Gentry', 'Briana Decker'], isActive: true, balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'], gender: 'female', age: 39,

//     },

// ];
// const getUserNames = users => {

//   };

//   console.log(getUserNames(users));
// function calculateTotalPrice(allProdcuts, productName) {
//     const Products = [
//         { name: 'apple', prise: 120, quality: 4 },
//         { name: 'banana', prise: 220, quality: 4 },
//         { name: 'coconad', prise: 100, quality: 4 },
//         { name: 'cucumber', prise: 320, quality: 4 }
//     ]
//     for (let i = 0; i < Products.length; i++) {
//         const al = Products[i] * Products.quality;
//     }
//     return al;
// }
// console.log(calculateTotalPrice(Products));
// const people = {
//     color: 'dark',
//     hand: true,
//     leg: true,
//     age: 19,
//     input() {
//         console.log(`мені ${this.age} і я лох`);
//     }
// }
// people.input()
// class Human {
//     constructor(legs, arms, colorOfeyes, fingers, colorOfHair) {
//         this.legs = legs;
//         this.arms = arms;
//         this.colorOfeyes = colorOfeyes;
//         this.fingers = fingers;
//         this.colorOfHair = colorOfHair;
//     }
//     speak() {
//         console.log(`i am have fifty ${this.legs}`);
//     }
// }
// const romasik = new Human(2, 2, 'red', 65, 'blue')
// console.log(romasik);
// romasik.speak()
// class romeo {
//     constructor({ name, robota, legs }) {
//         this.name = name;
//         this.robota = robota;
//         this.legs = legs;
//     }
// }
// const ecxempltar = new romeo({ name: 'romasik', robota: 'prostityt', legs: 2 })
// console.log(ecxempltar);
// class Person {
//     constructor({ firstName, lastName }) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName() {
//         return ` ${this.firstName} ${this.lastName} `
//     }
// }
// const person1 = new Person({ firstName: 'John', lastName: 'Doe' });
// console.log(person1.getFullName()); // John Doe
// class Rectangle {
//     constructor({ width, height }) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return `${this.width * this.height}`;
//     }
// }
// const rectangle1 = new Rectangle({ width: 10, height: 5 });
// // 50
// console.log(rectangle1.getArea());
// class  Calculator {
//     Calculator({}) {
        
//     }
// }
document