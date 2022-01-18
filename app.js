// const person: {
//     name: string;
//     age: number;
// }
var person = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking']
};
var favActiveities;
favActiveities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(person);
