// const x = Number(prompt("Введіть перше число:"));
// const y = Number(prompt("Введіть друге число:"));

// alert(x + " + " + y + " = " + (x + y));

// const first = Number(prompt("first number"));
// const second = Number(prompt("second number"));
// alert(first + "-" + second + "=" + (first - second));

// const z = Number(prompt("first number"));
// const r = Number(prompt("second number"));

// alert(z + "*" + r + "=" + (z * r));

// const p = Number(prompt("first number"));
// const o = Number(prompt("second number"));

// alert(p + "/" + o + "=" + (p / o));
// const message = 'Mango ' + 'is' + ' happy';
// console.log("message");
// const text = 'hello' + 'my' + 'brother';
// console.log("text");
// const paint = 'this' + 'is' + 'my' + 'weBsite';
// console.log("paint");
// let result;
// result = 5 + '5';
// console.log(result);
// typeof result;
// console.log(typeof result);
// result = 5 + '5' + 5;
// console.log(result);
// typeof result;
// console.log(typeof result);
// result = 5 + 5 + '5';
// const message = 'Welcome to Bahamas!';
// console.log(message.length);
// const message2 = 'Welcome to Yhersko';
// console.log(message.toUpperCase());
// console.log(message.indexOf('Dnipro'));
// console.log(message.includes('welcome'));
// console.log(message.startsWith('Wel'));
// console.log(message.endsWith('!'));
// const message =
//     'My name is ' + name + ", I'm " + age + ' years old and ' + mood + 'happy';
// console.log(message);

// const name = 'serhiy';
// const age = 15;
// const mood = 'happy';

// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;
// console.log(sameMessage);
// const text = prompt("your name")
// console.log(text.trim());
// const firstName = 'dudines sergiy';
// console.log(firstName.length);
// const name = 'serhiy';
// const age = '16';
// const mood = 'so good'
// const firstName = 'dudines'
// const name = 'serhiy';
// console.log(name.toUpperCase());
// const firstNAme = 'dudines sergiy';
// console.log(firstNAme.indexOf(s));
// const name = 'гість';
// const hotel = 'готель'
// const x = 'x';
// const y = 'y';
// const g = 'g';
// const n = 'n';
// console.log(name + x + y + g + hotel + n );
// const text = prompt("type your name");
// console.log(text.indexOf());
// console.log("textOnlySerhiy");
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';

// const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

// function checkForBlacklistedWords(text) {
//     const lowerText = text.toLowerCase();
//     return lowerText.includes(blacklistedWord1) || lowerText.includes(blacklistedWord2);
// }

// // Перевіряємо всі рядки
// console.log(checkForBlacklistedWords(string1));
// console.log(checkForBlacklistedWords(string2));
// console.log(checkForBlacklistedWords(string3));
//логічне I !
// const num = 20; //true //false
// const result = num > 10 && num < 30;
// console.log(result);
//логічне або !
// const num = 15;
// const result = num < 10 || num > 30;
// console.log(result);
// console.log(!true);
// console.log(!false);
// console.log(!1);
// console.log(!0);
/*
* Логічне І (оператор &&)
* - Запинається на брехні
* - Повертає те на чому запнулось або останній операнд
*/


// console.log(1 && 4 && 7 && 'mango');


/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */


// console.log("name" || "" || null || 0 || undefined);

/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */
// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//     cost = 100;
// }


// const text = confirm("напиши своє імя")
// console.log(text);
// if (text) {
//     prompt("твоє імя")
// } else {
//     alert("ех ну ладно")
// }
// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//     cost = 0;
// } else if (subscription === 'pro') {
//     cost = 100;
// } else if (subscription === 'premium') {
//     cost = 500;
// } else {
//     console.log('Invalid subscription type');
// }
// const text = confirm("напиши ноиер твоєї карти");
// console.log(text);
// if (text) {
//     prompt("твій cvv код")
//     alert("от бачиш все було просто")
// } else {
//     alert("мені всеодно ти мусиш написати твій cvv код")
//     prompt("давай пиши!!!!")
//     alert("от бачиш все було просто")

// }
// let type;
// const age = 20;


// if (age >= 18) {
//     type = 'adult';
// } else {
//     type = 'child';
// }
// let type;
// const age = 20;
// if (age) {
//     console.log(Number(age >= 18));
// }
// let type;
// const type2 = prompt("введіть назву javaScript")
// console.log(type === ECMAScript);
// if (type2) {
//     type = "ok";
//     document.write("ECMAScript")
// } else {
//     type = "no";
//     alert("ви не знаєте ECMAScript???")
// }

let balance = 1000;
let withdrawal = parseFloat(prompt("Введіть суму для зняття: ")) || 0;

alert(`Ви хочете зняти ${withdrawal} гривень. Перевіряємо доступні кошти...`);

if (withdrawal > 0 && withdrawal <= balance) {
    balance -= withdrawal;
    alert(`Операція успішна! Ви зняли ${withdrawal} гривень. Залишок на рахунку: ${balance} кредитів.`);
} else if (withdrawal > balance) {
    alert("Недостатньо коштів на рахунку!");
} else {
    alert("Некоректна сума зняття!");
}
alert()
alert("Дякуємо, що скористалися банкоматом!");
alert ("привіт як тебе зввати");
const text = prompt("привіт як тебе звати?");
console.log("alert")

