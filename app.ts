import { textSpanOverlap } from "typescript";

let calSum = (first: number, second: number, third?: number) => {
    return first + second;
};
calSum(2,2)

let aString = 'Hi';
aString = "5";

let bString: string;
bString = '8'

let anyVar: any = 'a string in this case but can be any type'

//union - can be one type or another
let year: string | number ;
year = 2022;
year = "2022";
const parsedYear = parseInt(year);

//array of strings
let arrString: string[] = ['a', 'b', 'c'];
arrString[0] = 'd';
arrString.push('e')

//array of numbers
let arrNumber: number[] = [1,2,3]

//array of booleans
let arrBool: boolean[] = [true, false]

//array of mix types. Here any type can be displaied in array. The order doesnt matter
let arrMix: (string | number | boolean)[] = [1, 'a', true]

//What if you need to display a spesific type in a specific place
//For that you can use tuple
//So here the order matters
let arrTup: [string, number] = ["a string", 5];

//Object on TypeScript

let person = {
    name: "Jesse",
    age: 25
}
person.name = "Jo"

//elias
type stringOrNum = string | number;
let years: stringOrNum;
years = 2022;
years = "2022";

//functions in TypeScript

let calSums: (a: number, b:number) => number;

calSums = (first: number, second: number, third?: number) => {
    return first + second
}
calSums(2,2)

//interfaces in TypeScript

interface PersonInterface {
    name: string;
    age: number;
}

let mike: PersonInterface = {
    name: 'Mike',
    age: 34
}

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
class Person implements PersonInterface{
  constructor(public name: string, public age: number) {}

    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age}`;
    }
}

let jo = new Person('Jo', 35)

console.log(jo.greet())


//DOM and Type casting
const inputName = document.querySelector('#name') as HTMLInputElement;
const inputAge = document.querySelector('#age') as HTMLInputElement;
const inputForm = document.querySelector('form')!;
const greeting = document.querySelector('.greeting') as HTMLDivElement ;

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const person = new Person(inputName.value, inputAge.valueAsNumber)

    greeting.innerText = person.greet();

    inputForm.reset();
})


//Generics

function doSomething<T>(arg: T){
    // do smth
    return arg
}

doSomething<string>('string')

interface book <T>{
    id: number;
    name: string;
    data: T
}

const abook: book<string> = {
    id: 1,
    name: 'Title 1',
    data:'more data here'
}

const bBook: book<string[]> = {
    id: 2,
    name: 'Title 2',
    data: ['review', 'one', 'two']
}

//enums
enum ManufacturerMake { TESLA, AUDI, MERCEDES, VOLVO}
const myCar = {
    year: 2021,
    make: ManufacturerMake.VOLVO
}

console.log(myCar.make)