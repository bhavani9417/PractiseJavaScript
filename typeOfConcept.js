let x = 30;
console.log(typeof(x)); //number

x = "Hello";
console.log(typeof(x)); //string

x = {
    name: 'John',
}
console.log(typeof(x)); //object

let flag = true;
console.log(typeof(flag));//boolean
let type = typeof(flag); //here flag value is "let flag: true", so type value type is "object"

let arr = [1,2,3,4,5];
console.log(typeof(arr)); //object

const j = null;
console.log(typeof(j)); //object

let y;
console.log(typeof(y)); //undefined



function print(name){
    console.log("My Name is "+name);
}

console.log(typeof(print));//"function"

