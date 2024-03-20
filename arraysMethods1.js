//1. every(): returns true, if all eles of the iterable are true
let num = [1,2,3,4,5];
let flag = num.every((e) => e<10);
console.log(flag);

//2. some(): atleast one ele in the array passes the condition or not
let number = [1,2,3,4,5];
let fg = number.some((e) => e % 2 === 0);
console.log(fg);

//3. find(): finds first element that satisfies the given condition
let total = [1,2,3,5,7,9];
let fe = total.find((e) => e%2===0);
console.log(fe);

//4. indexOf(): 
let arry = ['apple', 'banana','mango', 'pear'];
let indexof_str = arry.indexOf('mango');
 //-1 if not found in
 console.log("index of mango: ", indexof_str );

 //5. lastIndexOf(): last index of the specific ele
 let fruits = ['apple', 'apple', 'banana','mango', 'pear' ];
 let lastApple = fruits.lastIndexOf('apple');
console.log(lastApple);

//6. reverse(): reverse the order of ele in the array
let frts = ['apple', 'banana','mango', 'pear' ];
let revFruits = frts.reverse();
console.log(revFruits);

//7. sort(): sorts in alphabetical order by default
let products = ['macbook', 'imac','samsung', 'canon' , '123test', 'Tshirt'];
let proSort = products.sort();
console.log(proSort);