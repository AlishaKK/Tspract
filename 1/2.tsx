// // 2. Palindrome Check
// // Problem: Write a function that checks whether a given string is a palindrome (reads the same forward and backward).
// // Concepts: Strings, Conditionals.
// function isPalindrome(str:string) {
//     const reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
//   }
  
//   // Test the function
//   console.log(isPalindrome("madam")); // true
//   console.log(isPalindrome("hello")); // false
// 1. Basic Function Declaration
// Write a TypeScript function named greet that takes a string parameter name and returns a greeting message in the format: "Hello, <name>!".

function Greet(name:string){
  return  `Hello, <${name}>!`
}
Greet("Alisha")
//2. Function with Default Parameters
// Create a function multiply that takes two numbers, a and b, as parameters and returns their product. The second parameter should have a default value of 1.
function Mul(a:number,b:number=1){
  let product =a*b
  return 

}
Mul(2)
// 3. Arrow Function
// Convert the following regular function into an arrow function:
// typescript
// Copy code
// function add(x: number, y: number): number {
//     return x + y;
// }
const add = (x: number, y: number): number => x + y
//4. Optional Parameters
//Write a TypeScript function fullName that takes two parameters: firstName and lastName.
// The lastName parameter should be optional. The function should return the full name, and if the lastName is not provided, it should return just the firstName.
function fullName(firstName:string,lastName?:string){
  if(lastName !== undefined){
    return `firstName ${firstName}and lastName ${lastName}`
  }
return `firstName ${firstName}`
}
console.log(fullName("Alisha","kayani"))
//return lastName ? ${firstName} ${lastName} : firstName;
//5. Function Overloading
//Implement a function named getInfo that can take either a string or a number as a parameter.
// If it's a string, the function should return "You provided a string". 
//If it's a number, the function should return "You provided a number".
function getInfo(n:string):string;
function getInfo(n:number):number;
function getInfo(n:string|number):any{
 if(typeof n === "number")
 {
  return "You provided a number"
 }
 return "You provided a string"
}
getInfo(3)
getInfo("Alisha")
//function getInfo(n: string): string;
// function getInfo(n: number): string;

// function getInfo(n: string | number): string {
//   if (typeof n === 'string') {
//     return "You provided a string";
//   } else if (typeof n === 'number') {
//     return "You provided a number";
//   }
// }

// console.log(getInfo("Hello")); // Outputs: You provided a string
// console.log(getInfo(123)); // Outputs: You provided a number