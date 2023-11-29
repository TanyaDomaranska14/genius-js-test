// let a = 10;
// console.log(a);

// let name = 'Tanya';
// let hello = `hello ${name}`;
// console.log(hello);

// let user = {
//     name: "Tanya",
//     age: 18,
//     work: true,
// };
// console.log(user);

// let user1 = {};
// user1.name = "Sergiy";
// user1.age = 33;
// user1.work = true;
// console.log(user1);
// delete user1.age;
// console.log(user1);
// console.log(user1.name);

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// const isConfirm = confirm("please confirm reservation");
// console.log(isConfirm);

// const userName = prompt("Please enter your name:");
// console.log(userName);

// Array

// let array = ["Apple", "Orange", "Cherry"];
// console.log(array);
// array.push("Lemon");
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("Apple");
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// console.log('Next array');
// for (let item of array) {
// console.log(item);
// }
// console.log("Next array");
// for (let y in array) {
//     if (array[y] === "Lemon") {
//         array[y] += ' sugar';
//     }
// console.log(array[y]);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[2][1]);

// let array = ["a", "b", "c", "d"];
// console.log(array);
// //через delete видаляється тільки значення
// delete array[1];
// console.log(array);
// //ось так потрібно видаляти з масиву, через splice
// array.splice(2, 1);

// console.log(array);
// повертає новий масив з і до, копіює новий масив
// console.log(array.slice(1,3));

//concat поєднує масив в один
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log(a.concat(array, b));

//indexOf шукає заданий елемент і повертає його індекс або -1 якщо не знайшов
// console.log(array.indexOf("a")); //0

//lastIndexOf() шукає заданий елемент, але з іншого боку
// console.log(array.lastIndexOf("a")); //0

//includes повертає boolean чи є елемент чи немає
// console.log(array.includes("b")); //true

// const fruits = [
//   { id: 0, name: "apple" },
//   { id: 1, name: "pear" },
//   { id: 2, name: "orange" },
//   { id: 3, name: "lemon" },
//   { id: 4, name: "grape" },
//   { id: 5, name: "orange" },
//   { id: 6, name: "orange" },
// ];
// console.log(fruits.find((item) => item.id === 2)); //orange

//filter фільтрує по вибраному типу
// console.log(fruits.filter((item)=>item.name === 'orange'));//  поверне всі orange

// split розбиває в масив
// let names = "Таня, Іра, Свєта, Сергій";
// let array = names.split(", ");
// console.log(array);

// ? join робить з масиву строчку
// let newString = array.join(", ");
//  console.log(newString);

let arr = [1, 2, 3, 4, 5];
let something = arr.reduce((s, f) => s * f);
console.log(something);//15
console.log();
