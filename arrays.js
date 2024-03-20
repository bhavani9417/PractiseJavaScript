// Declaration of an array
let myArray = []; // An empty array
 

let lang = ["Java", "Python", "JS"];
//1. push:
lang.push("Ruby", "HTML"); //adds new element at the end of the array & return length of new array
console.log(lang);

//2. pop:
let numbers = [1, 2, 3, 4, 5];// An array with numbers
numbers.pop(); //removes last element from array & it will print the removed ele
console.log(numbers);

//3. shift:
let fruits = ["apple", "banana", "orange"]; // An array with strings
let fistFruit = fruits.shift(); //removes the first element & shift all the other eles to the lower index
console.log(fistFruit);
console.log(fruits);

//4. unshift:
let colors = ['red', 'green', 'black', 'white'];   //An array containing two elements
console.log(colors.length);
colors.unshift('blue', 'pink'); //adds new eles to the array at the begining & rest eles will be moved to the higer index
console.log(colors);
console.log(colors.length);

//5. splice:
let animals = ['dog','cat','bird','fish'];    // Array contains four string values
animals.splice(1,2,'bear','elephant'); // allow to add/remove ele from specific index of the array- here 1 is index, 2 is no of eles to be deleted
console.log(animals);

//6. slice:
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,4);////returns a copy of a section (subset) of an array from specified index
console.log(newPop);

//7. concat:
let fr = ["apple", "banana", "orange"];;
let num = [1,2,3,4];
let mixedArray = fr.concat(num); //add two arrays & store in the third array
console.log(mixedArray);

//8. indexOf:
let color = ["black", "red", "green", "blue", "red"];
let indexRed = color.indexOf("red"); // returns the first index at which given element found, if not present/exists return -1
console.log(indexRed);
let naveenIndex = color.indexOf("naveen");
console.log(naveenIndex);

//2nd red index:
let redSecondIndex = color.indexOf("red", color.indexOf("red")+1);
console.log(redSecondIndex);

//9. includes:
let test = ["admin", "customer", "seller", "vendor"];
let flag = test.includes("seller", "naveen"); //whether array includes ele or not
console.log(flag);

//10. forEach: for each loop calls "callback function" one time for each element in the array
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e * 2);
})
