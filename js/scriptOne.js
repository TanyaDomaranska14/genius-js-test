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

const addNumber = (number) => {
    let sum = Number(number) + 10;
    return console.log(sum);
}

const numberRef = document.querySelector('input[name = "number"]');

const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', () => {
    addNumber(numberRef.value);
})
console.log(numberRef.value);