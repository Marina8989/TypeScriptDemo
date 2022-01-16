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
let arrTup: [string, number] = ["a string", 5];
