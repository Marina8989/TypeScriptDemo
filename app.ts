// const person: {
//     name: string;
//     age: number;
// }
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string] // tuple
} = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
}

//person.role.push('admin')

let favActiveities: string[];
favActiveities = ['Sports'];

for(const hobby of person.hobbies) {
   console.log(hobby.toUpperCase());
}

console.log(person)