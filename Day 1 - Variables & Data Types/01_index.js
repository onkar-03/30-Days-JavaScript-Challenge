console.log(
  `
  
██████╗░░█████╗░██╗░░░██╗  ░░███╗░░░░░░░░
██╔══██╗██╔══██╗╚██╗░██╔╝  ░████║░░░░░░░░
██║░░██║███████║░╚████╔╝░  ██╔██║░░█████╗
██║░░██║██╔══██║░░╚██╔╝░░  ╚═╝██║░░╚════╝
██████╔╝██║░░██║░░░██║░░░  ███████╗░░░░░░
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝░░░░░░

██╗░░░██╗░█████╗░██████╗░██╗░█████╗░██████╗░██╗░░░░░███████╗░██████╗  ░█████╗░███╗░░██╗██████╗░
██║░░░██║██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██║░░░░░██╔════╝██╔════╝  ██╔══██╗████╗░██║██╔══██╗
╚██╗░██╔╝███████║██████╔╝██║███████║██████╦╝██║░░░░░█████╗░░╚█████╗░  ███████║██╔██╗██║██║░░██║
░╚████╔╝░██╔══██║██╔══██╗██║██╔══██║██╔══██╗██║░░░░░██╔══╝░░░╚═══██╗  ██╔══██║██║╚████║██║░░██║
░░╚██╔╝░░██║░░██║██║░░██║██║██║░░██║██████╦╝███████╗███████╗██████╔╝  ██║░░██║██║░╚███║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝╚══════╝╚═════╝░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░

██████╗░░█████╗░████████╗░█████╗░  ████████╗██╗░░░██╗██████╗░███████╗░██████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗  ╚══██╔══╝╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝
██║░░██║███████║░░░██║░░░███████║  ░░░██║░░░░╚████╔╝░██████╔╝█████╗░░╚█████╗░
██║░░██║██╔══██║░░░██║░░░██╔══██║  ░░░██║░░░░░╚██╔╝░░██╔═══╝░██╔══╝░░░╚═══██╗
██████╔╝██║░░██║░░░██║░░░██║░░██║  ░░░██║░░░░░░██║░░░██║░░░░░███████╗██████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝  ░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚══════╝╚═════╝░
`,
);

// ACTIVITY ONE : Variable Declaration

// Task one -> Declare a integer variable using the `var` keyword & log it into console

var a = 1;
console.log(`Var :  ${a}`);

// Task two -> Declare a string variable using the `let` keyword & log it to the console

let fullName = 'Onkar Patel';
console.log(`Let : ${fullName} `);

/* ACTIVITY TWO : Constant Declaration

Task 3 -> Declare a variable using the `const` keyword & assign it to a boolean & log it to the console

*/

const isBoolean = true;
console.log(isBoolean);

/* ACTIVITY THREE : Data Types

Task 4 -> Create variables of different Data Types [ number , string , boolean , array ]
& log each of them using the `typeof` operator
*/

const Name = 'Onkar Patel'; // String
const Age = 23; // Integer
const isStudent = true; // Boolean

const personalInfo = [Name, Age, isStudent]; // Array
const summary = {
  Name,
  Age,
  isStudent,
};

console.log(typeof Name);
console.log(typeof Age);
console.log(typeof isStudent);
console.log(typeof personalInfo);
console.log(typeof summary);

/*

ACTIVITY FOUR : Reassigning Variable

Task Five : Declare a `let` variable , assign it an initial value , reassign it & log both of them

*/

let value = 20; // initial value
console.log(`Initial Value of Let: ${value}`);

value = 40; // reassigned value
console.log(`Reassigned Value of Let: ${value}`);

/*

ACTIVITY FIVE : Understanding Constant

Try Reassigning a constant variable & observe the error

*/

const PI = 3.14;
// PI = 3.15; // TypeError: Assignment to constant variable.
