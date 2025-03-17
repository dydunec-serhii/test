
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

let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}