"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let calSum = (first, second, third) => {
    return first + second;
};
calSum(2, 2);
let aString = 'Hi';
aString = "5";
let bString;
bString = '8';
let anyVar = 'a string in this case but can be any type';
//union - can be one type or another
let year;
year = 2022;
year = "2022";
const parsedYear = parseInt(year);
//array of strings
let arrString = ['a', 'b', 'c'];
arrString[0] = 'd';
arrString.push('e');
//array of numbers
let arrNumber = [1, 2, 3];
//array of booleans
let arrBool = [true, false];
//array of mix types. Here any type can be displaied in array. The order doesnt matter
let arrMix = [1, 'a', true];
//What if you need to display a spesific type in a specific place
//For that you can use tuple
//So here the order matters
let arrTup = ["a string", 5];
//Object on TypeScript
let person = {
    name: "Jesse",
    age: 25
};
person.name = "Jo";
let years;
years = 2022;
years = "2022";
//functions in TypeScript
let calSums;
calSums = (first, second, third) => {
    return first + second;
};
calSums(2, 2);
let mike = {
    name: 'Mike',
    age: 34
};
//interfaces on classes
// class Person implements PersonInterface{
//     private name: string;
//     age: number;
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
//     greet() {
//         return `Hi, my name is ${this.name} and I am ${this.age}`;
//     }
// }
// let jo = new Person('Jo', 35)
// console.log(jo.greet())
//modified version of the class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age}`;
    }
}
let jo = new Person('Jo', 35);
console.log(jo.greet());
//DOM and Type casting
const inputName = document.querySelector('#name');
const inputAge = document.querySelector('#age');
const inputForm = document.querySelector('form');
const greeting = document.querySelector('.greeting');
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
//Generics
function doSomething(arg) {
    // do smth
    return arg;
}
doSomething('string');
const abook = {
    id: 1,
    name: 'Title 1',
    data: 'more data here'
};
const bBook = {
    id: 2,
    name: 'Title 2',
    data: ['review', 'one', 'two']
};
//enums
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
})(ManufacturerMake || (ManufacturerMake = {}));
const myCar = {
    year: 2021,
    make: ManufacturerMake.VOLVO
};
console.log(myCar.make);
