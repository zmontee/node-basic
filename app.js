const greeting = require("./greeting");
const http = require("http"); //загрузка модуля http, який треба для створення серверу
const os = require("os");
const User = require("./user");


http.createServer((request,response) => { // сворується новий сервер для прослуховування вхідних підключень і обробки запитів

    response.end("Hello NodeJS!");

}).listen(3000, "127.0.0.1", () => { // щоб сервер почав прослуховувати вхідні підключення, потрібно визвати цей метод
    greeting
})


let userName = os.userInfo().username; // получим имя текущего пользователя
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));


let kostya = new User('Kostya', 32);
kostya.sayHi();


const welcome = require("./welcome");
welcome.getEveningMessage();
welcome.getMorningMessage();


global.name = "Oleg";
global.console.log(date);
console.log(greeting.getMessage());




