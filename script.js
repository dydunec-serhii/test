const ask = confirm("згода на опитування");
if (ask) {
    alert("дякую за згоду")
    const ask2 = prompt("cvv code your card");
    console.log("ask2");
} else {
    alert("опитування відмінено");
}
const question = confirm("повідомлення про небезпеку");
console.log("question");
if (question) {
    alert("Дякую за підтвердження!");
    const question2 = alert("ви успішно купили це товар!");
    console.log("question2");
} else {
    alert("Дію відмінено!")
}
const install = confirm("встановити");
console.log("install");
if (install) {
    alert("встановлення відбуваєтся")
    const ask = confirm("цей файл може нашкодити вашому пк..");
    console.log("ask");
    if (ask) {
        alert("загрозу усунено")
        alert("програму встановлено")
        alert("дякуюємо за довіру!!")
    } else {
        alert("дію відмінено")
    }
} else {
    alert("дію відмінено:(")
}  
