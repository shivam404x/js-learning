// console.log("Hello Shivam");
// console.log("welcome shivam");

//varibles in JS

// name = 'Shivam';
// age = 54
// console.log(age);
// price = 2.7
// console.log(price);
// x = null
// console.log(x);

// y = undefined
// console.log(y);

// IsFollow = true;
// console.log(IsFollow);

// console.log(name);

// const nameOf = {
//     name:"shivam",
//     roll: 1234,
//     isFollow: true,
//     clas: "12th"
// };

// nameOf["name"] = "satyam";

// console.log(nameOf);

///*************Operator**************

//Arthmatic operator
// +,-,*,/

// Modulus matlab devide % egxample 5%2
//Exponentation matlab power samjo a** example 5**2

//Unary operator
//Increment ++ a++ or a+1 dono same hai
//Decrement -- a-- or a-1 dono same  hai

// let a = 5;
// let b = 8;
// console.log("a = ",a, "b = ", b);
// a--; //6
// console.log("a = ",a);//6

// a++  ho ya fir a--is a post increament 
// ++a ho ya fir --a is a pre decreament

//Assignment operator

// =, +=,-=, *=, %=, **=
//example
// let a = 5;
// let b = 6;

// a+=4 //a = a+4
// a **= 4; // a = a ** 4
// console.log("a = ",a); //625

//Comparision operator

// Equalto ==, Equal to & type ===
// Not equal to != , Not equal to & type !==
//>,<=,<,<=

//logical operator :-

//&& logical AND:
// True && True = True
// true && false = false
//false && true = false
//false && false = false//

//Logical OR || :-
//True || True = True
// true || false = True
//false || true = True
//false || false = false

//logical Not !  alwas ultha karega:-

//***************Conditional statements*********/
// if else statement:-

//example 1
// let age = 18;
// if (age>= 18){
//     console.log("vote");
// }else{
//     console.log("not vote"); 
// }

//example 2
// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }else {
//     color = "white";
// }
// console.log(color);

//example 3

// let num = 16;
// if(num % 2 === 0){
//     console.log(num,"is even");

// }else{
//     console.log(num,"is odd");
// }

//else-if statement:-

//example 1
// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black"
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }
// console.log(color);

// if (mode === "dark") {
//     console.log(mode);
// }

//Ternary Operators:-
// if else likne ka dusra tarika hai yea
//condition ? true output : false output
//age > 18 ? "adult" : "not adult";

//1)Exampe:-
// let age = 25;
// let result = age >= 18 ? "adult" : "not adult"
// console.log(result);

//Q) Get user to input a number using prompt("Enter a number:").check if numbe is multiple of 5 or not.

// solution

// let num = prompt("Enter a number");
// if (num % 5 === 0){
//     console.log(num,"is multiple of 5"); 
// }else{
// console.log(num,"is Not multiple of 5");
// }

//Q) Write a code which can give grades to student according to their score:

// let score = 91;
// let grade;
// if(score>=90 && score<=100){
//     grade = "A+" 
// }else if(score >=70 && score<=80){
//    grade = "A"
// }else if(score>=60 && score<=69){
//    grade = "B"
// }else if(score>=50 && score<=59){
//    grade = "c"
// }else if(score>=0 && score<=49){
//    grade = "F"
// }

// console.log("your acceadmic grade is",grade);


//*************"Loops in Js"*******************

// eska use ham tab kartea hai jab koi chiz hamea baar baar chalani ho tho hamlog loop ka use krtea hai.

//-------------For Loop :-
//Example:-
//Q) print one two five.
//solution

// for(let i = 1; i<=4; i++){
//    console.log("Hello Shivam");//4 execute
// }
// console.log("program end");

//calculate sum of 1 to 5

// let sum = 0;
// for(let i=1; i<=5;i++ ){
//    sum = sum+i;// sum=15
// }
// console.log("sum",sum);

//---------Infinite loop:------- A loop that never end:-
//Dont use this loop.
//stoping condition is alwas true.
//Example of infnite loop
// for(let i = 1; i>=0; i++){
//    console.log("i=",i);
// }

//-------------While Loop-------
// let i = 1;
// while(i<=5){
//    console.log("Hello shivam");
//    i++
// }

//-------------Do while loop---
// let i = 1;
// do{
//    console.log("i=",i);
//    i++;
// }while(i<=5);

//--------for-of Loop---------
// let str = "Shivam";
// let size = 0;
// for(let val of str){
//    console.log("value",val);
//    size++;
// }
// console.log("string size is =",size);

//---------for in Loop-----------
// let student = {
//    name:"Shivam",
//    age: 20,
//    cgpa: 7.5,
//    isPass: true
// };

// for(let key in student){
//    console.log("Key=",key,"value=",student[key]);
// }

//Q) Print all the even number from 0 to 100.

//solution

// for(let num = 0; num<=100; num++ ){
//  if(num%2 ===0){
//    console.log("num",num);

//  }

// }

//Q) Createa game where you start with any random game number.Ask the user to keep guessing the game number unitil the user enter correct value.

//solution
// let gameNum = 25;

// let userNum = prompt("Guss the game number:")
// while(userNum!=gameNum){
//  userNum = prompt("Wrong  number.try agin")
// }
// console.log("Conguratlations, Thanku visit agin");

//**************Strings***************** */
//strings is a sequence of character used to represnt text.

// let str = "Shivam";
// let str2= "Shiam"
// console.log(str2.length);
// console.log(str[3]);

//Template Literals
//Example:-
// let obj = {
//    item:"pen",
//    price: 34
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupess`;
// console.log(output);

//-----string method in js-------
// let str = "Shivam"
// let newStr = str.toUpperCase();
// let oStr = str.toLowerCase();
// let oStre = str.trim();
// str.replace("search","replace")
// let ostr = "123498745";
// console.log(ostr.slice(1,4));
// console.log(oStr);

//Q) prompt the user to enter their full name.generate a username for them based on the input start eith @,follow by their full name and ending with the fullname length.

//eg- user name = "Shivam",username should be "@shivam156"

//solution

// let fullName = prompt("Enter your name")
// let userName = "@"+fullName+fullName.length
// console.log(userName);

//**********************************Arrays********************************************/
//it is a collection of items.
// let marks = [54,58,85,5,4,3,32,2,3]
// console.log(marks);
// console.log(marks.length);//property
// console.log(typeof marks);

//----------array indices-------------

//In array value is store in linearly
//it is a mutable
//---looping over an Array
// for loop
//example:-
// let heros = ["shivam","Satyam","Roshan",56,98];
// for(let idx=0; idx<heros.length; idx++){
//     console.log(heros[idx]);
// }

// let cite = ["gurugrm","mumbai","Delhi"];
// for(let city of cite){
//     console.log(city.toUpperCase());
// }

//Let's practice
//Q) For a given array with marks of student ->[85,97,37,76,60]find the average marks of the entire class.

//solution 

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let value of marks){
//    sum += value;
// }

// let average = sum/marks.length;

// console.log(`avg marks of this class = ${average}`);

//question yea hai ki array ke har elemnet par 10% ka offer lagani hai.

//solution

// let item = [250,645,300,900,50];

// for(let i = 0; i<item.length; i++){
//    let offer = item[i]/10;
//    item[i] -= offer;
// }

// console.log(item);

//------------------Arrays method

//--Push(): add to end
//example:-
// let foodItems = ["potato","apple","litchi","tomato"];
// foodItems.push("grapes")
// console.log(foodItems);

//--Pop(): delete from end & return
//example:-
// let nameOf = ["shivam","Rupak","Roshan",];
// nameOf.pop("")
// console.log(nameOf);

//--toString():convert array to string
//example:-
// let nameOf = ["shivam","Rupak","Roshan"];
// console.log(nameOf.toString());

//--Concat(): join multiple arrays & return resut
//example:-
// let mrval = ["theo","look","broo"];
// let dcRoot = ["nope","done"];
// let herose = mrval.concat(dcRoot);
// console.log(herose);



//--unshift(): add to start manly ye push ke tra kaam karta hai

//example:-
// let mrval = ["theo","look","broo"];
// mrval.unshift("room");
// console.log(mrval);



//--shift():delete from start & return manly yea pop ke tra kaam karta hai.

//example:-
// let mrval = ["theo","look","broo"];
// let val = mrval.shift();
// console.log("deleted",val);

//--slice():returns a pice of the array original array ko change nahai karta hai

//example:-
// let mrval = ["theo","look","broo","boy","girl"];
// console.log(mrval.slice(1,3));



//splice():change original array(add,remove,replace)

// exmple:-
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.splice(2,2,122,103);
//add element
// arr.splice(2,0,1011)
//delete
// arr.splice(2,1);
//Replace element
// arr.splice(3,1,101)

//***********************"Function"****************
//it is a block of code that perform a specific task,call whenever needed.

//This is a defination of function
// function myFunction(){
//     console.log("helo shivam");
//     console.log("welcome to my home");
// }
//function under jo input hota hai usko parameter/argument boltea hai eg= myFunction("i love js")

//This is a colling/invoke a funcion

//function myFunction(hello shivam)//this is a parameter qki function defination ke under ham ne variable ko pass kiya hai 

// myFunction();

//myFunction("i love shiv"); // function call ke under jis value ko pass kartea hai usko argumnet boltea hai

//function -------> numbers,sum

// function sum(x,y){
//local varable---scope
//  s = x+y;
//  return s;
//return ke baad koi code nahi likna chyea q ki uo excute nahi hoga.
// }
// let val = sum(6,4);
// console.log(val);

//function ke parameters x,y yani two para meter hai joki local variable hotea hai jiskea pas block scope hotea hai.

// sum function
// function sum(a,b) {
// return a+b;
// }
// multiplication function
// function mult(a,b){
//     return a*b;
// }

//--------Arrow Function
//Arrow fuction is a part of modern js
// it is a compact way of writing a fuction

// const funcionName = (param1,parm2) =>{
//do some work
// }

// example:-
// const arrowSum = (a,b)=>{
//  console.log(a+b);
// }

//Q) Create a function using the "fuction" keyword that take a string as an argument & returns the number of vowels in the string.
//solution

// function countvoueal(str) {
//     let count = 0;
//     for (const chr of str) {
//       if (chr === "a" || chr === "e" || chr === "i" || chr === "o" || chr === "u"){
//         count++;
//       }
//     }
//  return count;
// }

//Q) Create an arrow function to perform the same task.
// solutin

// let vol=(str) =>{
// let count = 0;
//     for (const chr of str) {
//       if (chr === "a" || chr === "e" || chr === "i" || chr === "o" || chr === "u"){
//         count++;
//       }
//     }
//  return count;
// }

//--------forEach loop in Arrays
//forEach it is a method to create a loop
// arrforEach(callFunction)
//A callback is a function passed as an argument to another function.

//forEach is higher order function/method yea uo function hotea hai jo dusrea function ko as a parameter le letea hai/use kar letea hai ya fir kisi function ko return krtea hai as a value

//CallbackFunction: Here,it is a function to execute for each element in array.

//Example:-

// let arr = [1,2,3,4,5,6,7,8,9]
//  arr.forEach((val)=>{
//     console.log(val);
    
//  })

//Q) For a given array of number,print the square of each value using the forEach loop.

// let arr = [1,2,3,4,5,6]
// arr.forEach((arr)=>{
//     console.log(arr*arr); //arr**2
    
// })

//---------Some More array Methods:-
//it is very simalar to forEach 
//dono me difference yea hai ki map kya krta hai naya array return kar ke de deta hai.

//example-
//arr.map(callbackFnx(value,index,array))
// ham log index or arry ko ignire kartea hai or generly value he liktea hai.


//example-
//let newArr = arr.map((val)=>{
// return val*2;})

//example-
// let nums = [1,2,3,4,5];
//  let newArr = nums.map((val) => {
//     return val*2;
// });

// console.log(newArr);

//-----Filter arry method
//example--
// let arr = [1,2,3,4,5,6]
// let evenArr = arr.filter((val)=>{
//     return val % 2 === 0;
// })

// console.log(evenArr);

//----Reduce mathod

//jab hamea output me single value chyea input bahut sari value hai tab ham es mathod ka use krtea hai.
//example:-
// let arr = [1,2,3,4,5]
// const output = arr.reduce((res,curr)=>{
//     return res + curr;
// });

// console.log(output);

//Q) we are given array of marks of students.filter out of the marks of students that score 90+

//solution

// let arr = [ 23,65,56,36,92,98,90]
// let niNe = arr.filter((val) =>{
//     return val > 90;
// })

// console.log(niNe);

//Q)Take a number as input from user.create an array of number from 1 to n.
//Use the reduse  method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all numbers in thr array.

//solution
let number = prompt("Enter your number");
let arr = [];

for(let i=1; i<=number; i++){
    arr[i-1] = i
}

console.log(arr);
let sum = arr.reduce((res,curr) => {
    return res+ curr;
});

console.log("sum=",sum);

let factorial = arr.reduce((res,curr) => {
    return res *curr;
});

console.log("Factorial = ",factorial);

























































