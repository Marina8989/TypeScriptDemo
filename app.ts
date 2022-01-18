// const person: {
//     name: string;
//     age: number;
// }
const person = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking']
}

let favActiveities: string[];
favActiveities = ['Sports'];

for(const hobby of person.hobbies) {
   console.log(hobby.toUpperCase());
}

console.log(person)