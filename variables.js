//1. var: old way
//ES6
//scope: var
//functionally/locallly + global scope

var x = 10; //declaration+initialization
function test(){ //create function
    var y = 20;
}
console.log(x);

var pop = "hi js";
function rel(){
    var top = "hello js";
}
rel();
console.log(pop);
//console.log(top);

var browser = "chrome";
var browser = "firefox";
browser = "edge"; //re-initialze the value
console.log(browser);

//////
var g;
console.log(g);//undefined
g = "hello world";
console.log(g);

//issue with var:
var flag = "hey linda";
var t1 = 4;
if(t1 > 3){
    var flag = "hey tom"; //re-declare the value
}
console.log(flag);

//let :
//scope: block scoped
//{}
let m = "hey linda";
let time = 4;
if(time >  3){
    let mesg = "hey hw r u?";
    console.log(mesg);
}
//console.log(mesg);
console.log(m);

//
let len = 4;
len = 5; // we can re-intialize the value, but we can't redeclare it
console.log(len);

//const:
const mg = "hey linda";
//mg = "hey tom";
console.log(mg);

const days = 7;
//days = 10;
console.log(100 * days);

//
const p = 10;
console.log(p);

