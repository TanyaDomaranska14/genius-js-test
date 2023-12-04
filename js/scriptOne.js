//! Functions виконуються зверху вниз

// function showMessage(name,sity) {
//     console.log('Hello my name is ' + name + ' I am from ' + sity);
// }
// showMessage('Tanya', 'Kyiv');
// showMessage('Sergiy', 'Kyiv');
// showMessage('Robert', 'Kyiv');

// const sayHi = function () {
//     let message = 'hello';
//     console.log(message);
// }
// sayHi();

// function sum (a,b) {
//     return a + b;
// }
// let result = sum(2, 7);
// console.log(result);

//!callback функція яка буде виконана пізніше якщо її викличуть
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }
// function showOk() {
//   console.log("You say ok");'
// }
// function showNo() {
//   console.log("You say no");
// }
// ask("Yes or no", showOk, showNo);

// !Стрелочна функція
// const showMovie = (age) => {
//   if (age > 21) {
//      return console.log("Hello, go to the cinema");
//   }
//   return console.log("Bye, you too young");
// };
// showMovie(144);

// const addNumber = (number) => {
//     let sum = Number(number) + 10;
//     return console.log(sum);
// }

// const numberRef = document.querySelector('input[name = "number"]');

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => {
//     addNumber(numberRef.value);
// })
// console.log(numberRef.value);

//! замикання функції
// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = createUrl("com");

// console.log(comUrl('google'));
// console.log(comUrl('facebook'));

//! this
// function hello() {
//     console.log("Hello",this);
// }
// hello();

// const user = {
//     name: "Roman",
//     sity: 'Ukrainka',
//     age: 16,
//     sayHello: hello,
// }

// user.sayHello()

// function abc() {
//     console.log(this);
// }
// abc();

// document.querySelector('p').onclick = abc;

//!зміна кольору при кліку на div
// function changeColor() {
//     console.log(this);
//     this.style.background = "green";
//     this.style.color = "white";
// }
// document.querySelector('div').onclick = changeColor;

//!зміна кольору при кліку, але обирає всі div через selectSelectorAll
// function changeColor() {
//     console.log(this);
//     this.style.background = "green";
//     this.style.color = "white";
// }
// let user = document.querySelectorAll('div');

// user.forEach(function (element) {
//     element.onclick = changeColor;
// });

//! в "стрілці" немає this, тобто потрібно використовувати this тільки у function
// const showList = () => {
//     console.log(this);
// }
// showList();

// const list = {
//     names: ["Ann", "Tanya", "Nata", "SErgiy"],
//     showList: showList,
// }
// list.showList();

//! як використовувати bind
// function hello() {
//     console.log(this);
// }

// const user = {
//     name: "Tanya",
//     age: 18,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function (city) {
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`City is ${city}`);
//     }
// }
// user.info();

// const Ann = {
//     name: "Ann",
//     age: 25,
// }
// user.info.bind(Ann)('Kyiv');

// const Nata = {
//   name: "Nata",
//   age: 35,
// };
// user.info.bind(Nata,'Ukrainka')();

//! метод call
// const userInfo = {
//     name: "name",
//     age: 33,
//     logInfo: function (job) {
//         console.group(`${name} info:`);
//         console.log(`Name is: ${this.name}`);
//         console.log(`Age is: ${this.age}`);
//         console.log(`Job is: ${job}`);
//         console.groupEnd();
//     },
// };
// const Ivan = {
//     name: "Ivan",
//     age:45,
// };

// userInfo.logInfo.call(Ivan, 'developer');

//!apply
// const userInfo = {
//     name: "name",
//     age: 33,
//     logInfo: function (job,city) {
//         console.group(`${name} info:`);
//         console.log(`Name is: ${this.name}`);
//         console.log(`Age is: ${this.age}`);
//         console.log(`Job is: ${job}`);
//         console.log(`Sity is: ${city}`);
//         console.groupEnd();
//     },
// };
// const Ivan = {
//     name: "Ivan",
//     age:45,
// };
// userInfo.logInfo.apply(Ivan, ["developer", "Kyiv"]);


// ! move mouse
const ball = document.querySelector(".ball");

ball.onmousedown = function (event) {
  function move(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetWidth / 2 + "px";
  }
  move(event.pageX, event.pageY);

  function onMouseMove(event) {
    move(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);
  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
  };
};
