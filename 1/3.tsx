// function sortArray(arr:number[]):number[]{  
//     return arr.sort((a,b)=>a-b)
// }
// console.log(sortArray([1,3,2,4]))
// function factorial(n:number) {           
//     let result = 1;
//     for (let i = 1; i <= n; i++) {     
//       result =result* i;   
//     }
//     return result;
//   }
//   console.log(factorial(5))
//Write a TypeScript function to authenticate a user using a username and password. The function should take a username and password as
// input, and return a boolean indicating whether the authentication was successful.
// function Auth(username:string,pw:string){
//   if(username ==="Alisha" && pw==="123"){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(Auth("Alisha","123"))
function authenticate(username: string, password: string): boolean {
  // In a real-world scenario, you would typically fetch users from a database
  const users = [
    { username: "Alisha", password: "123" }, // Note: Storing passwords in plain text is insecure
  ];

  // Find the user by username
  const user = users.find((user) => user.username === username);

  // If the user exists and the password matches, return true
  if (user && user.password === password) {
    return true;
  }

  return false;
}

console.log(authenticate("Alisha", "123")); // true
console.log(authenticate("Alisha", "wrong")); // false
console.log(authenticate("wrong", "123")); // false
//Write a TypeScript function that takes two numbers as input and returns their sum, 
//difference, product, and quotient using arithmetic operators.



function calculateArithmeticOperations(num1: number, num2: number) {
  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;

  return {
    sum,
    difference,
    product,
    quotient
  };
}

// Example usage:
const result = calculateArithmeticOperations(10, 2);
console.log(result);
//Write a TypeScript function that takes two boolean values as input and returns a boolean value indicating whether both values are true, or either value is true, 
// or neither value is true using logical operators.
// function Bol(val1:boolean,val2:boolean){
//   if(val1 ===true && val2 === true){
//     console.log("Both value are True")
//     return true
//   }else{
//     return false
//   }
// }
// console.log(Bol(true,true))


function booleanOperations(val1: boolean, val2: boolean) {
  const bothTrue = val1 && val2;
  const eitherTrue = val1 || val2;
  const neitherTrue = !val1 && !val2;

  console.log(`Both true: ${bothTrue}`);
  console.log(`Either true: ${eitherTrue}`);
  console.log(`Neither true: ${neitherTrue}`);

  return { bothTrue, eitherTrue, neitherTrue };
}

// Example usage:
booleanOperations(false, true);
//Write a TypeScript function that takes a score as input and returns a string indicating
// whether the score is high, medium, or low using the conditional (ternary) operator.

function calculator(num1: number, operator: string, num2: number): number {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('Cannot divide by zero!');
      }
    default:
      throw new Error('Invalid operator!');
  }
}

console.log(calculator(10, '+', 2)); // 12
console.log(calculator(10, '-', 2)); // 8
console.log(calculator(10, '*', 2)); // 20
console.log(calculator(10, '/', 2)); // 5


function Marks(marks:number){
switch(true){
  case marks>90 && marks<=100:
  console.log("grade A")
  break;
  case marks>80 && marks<=90:
    console.log("grade B")
    break;
    case marks>70 && marks<=80:
      console.log("grade C")
      break;
      case marks>60 && marks<=70:
        console.log("grade D")
        break;
        case marks>50 && marks<=60:
          console.log("grade F")
          break;
          default:
            console.log("Sorry try again")
}
}
Marks(100)