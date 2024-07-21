console.log(`

██████╗░░█████╗░██╗░░░██╗  ██████╗░░░░░░░░█████╗░██████╗░███████╗██████╗░░█████╗░████████╗░█████╗░██████╗░░██████╗
██╔══██╗██╔══██╗╚██╗░██╔╝  ╚════██╗░░░░░░██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔════╝
██║░░██║███████║░╚████╔╝░  ░░███╔═╝█████╗██║░░██║██████╔╝█████╗░░██████╔╝███████║░░░██║░░░██║░░██║██████╔╝╚█████╗░
██║░░██║██╔══██║░░╚██╔╝░░  ██╔══╝░░╚════╝██║░░██║██╔═══╝░██╔══╝░░██╔══██╗██╔══██║░░░██║░░░██║░░██║██╔══██╗░╚═══██╗
██████╔╝██║░░██║░░░██║░░░  ███████╗░░░░░░╚█████╔╝██║░░░░░███████╗██║░░██║██║░░██║░░░██║░░░╚█████╔╝██║░░██║██████╔╝
╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░  ╚══════╝░░░░░░░╚════╝░╚═╝░░░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═════╝░
`);

// Global Variable Declaration
const num1 = 10;
const num2 = 5;

console.log('Number1: ', num1);
console.log('Number2: ', num2);

/*
ACTIVITY ONE: Arithmetic Operation
 */

console.log(`\n---Activity One---\n`);
// Task 1: Write a program to add two numbers & log it to the console

function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

// Task 2: Write a program to subtract two numbers & log the result to the console

function subtractNumbers(a, b) {
  return a - b;
}

const difference = subtractNumbers(num1, num2);
console.log(`The difference between ${num1} and ${num2} is: ${difference}`);

// Task 3: Write a program to multiply Two numbers & log the result to the console

function multiplyNumbers(a, b) {
  return a * b;
}

const multiplication = multiplyNumbers(num1, num2);
console.log(`The product of ${num1} and ${num2} is: ${multiplication}`);

// Task 4: Write a program to divide two numbers & log the result to the console

function divideNumbers(a, b) {
  if (b === 0) {
    return 'Error: Division by zero is not allowed.';
  }
  return a / b;
}

const division = divideNumbers(num1, num2);
console.log(`The result of dividing ${num1} by ${num2} is: ${division}`);

// Task 5: Write a program to find the remainder & log it to the console

function findRemainder(a, b) {
  return a % b;
}

const remainder = findRemainder(num1, num2);
console.log(`The remainder of dividing ${num1} by ${num2} is: ${remainder}`);

/*
ACTIVITY TWO: Assignment Operator
*/
console.log(`\n---Activity Two---\n`);

// Task 6: Use the `+=` operator to add a number to a variable & log it to the console

let baseValue = 10; // Initial value
const addValue = 5; // Value to add

baseValue += addValue; // Add addValue to num

console.log(
  `The result after adding ${addValue} to ${
    baseValue - addValue
  } is: ${baseValue}`,
);

// Task 7: Use the '-=' operator to subtract a number to a variable & log it to the console

let initialValue = 10; // Initial value
const subtractValue = 3; // Value to subtract

initialValue -= subtractValue; // Subtract subtractValue from num

console.log(
  `The result after subtracting ${subtractValue} from ${
    initialValue + subtractValue
  } is: ${initialValue}`,
);

/*
ACTIVITY THREE: Comparison Operator
*/
console.log(`\n---Activity Three---\n`);

// Task 8:  Write a program to compare two numbers using > and < and log the result to the console

const isGreater = num1 > num2;
console.log(`${num1} is greater than ${num2}: ${isGreater}`);

const isLess = num1 < num2;
console.log(`${num1} is less than ${num2}: ${isLess}`);

// Task 9:  Write a program to compare two numbers using >= and <= and log the result to the console

const isGreaterOrEqual = num1 >= num2;
const isLessThan = num1 < num2;

console.log(`${num1} is greater than or equal to ${num2}: ${isGreaterOrEqual}`);
console.log(`${num1} is less than ${num2}: ${isLessThan}`);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console

// Program to compare two numbers using == and === and log the result to the console
const exampleNum1 = 10; // First number
const exampleNum2 = '10'; // Second number, as a string

// Using == (equality) operator
const isEqual = exampleNum1 == exampleNum2;

// Using === (strict equality) operator
const isStrictEqual = exampleNum1 === exampleNum2;

console.log(`Comparing values using the '==' (equality) operator:`);
console.log(`Value of num1: ${exampleNum1} (type: ${typeof exampleNum1})`);
console.log(`Value of num2: ${exampleNum2} (type: ${typeof exampleNum2})`);
console.log(`num1 == num2: ${isEqual}`);
console.log(
  `Explanation: The '==' operator compares only the values. Since '10' (a string) is coerced to a number, the comparison is effectively 10 == 10, which is true.`,
);

console.log(`\nComparing values using the '===' (strict equality) operator:`);
console.log(`Value of num1: ${exampleNum1} (type: ${typeof exampleNum1})`);
console.log(`Value of num2: ${exampleNum2} (type: ${typeof exampleNum2})`);
console.log(`num1 === num2: ${isStrictEqual}`);
console.log(
  `Explanation: The '===' operator compares both the values and their types. Since num1 is a number and num2 is a string, they are not strictly equal. Therefore, the result is false.`,
);

/*
ACTIVITY FOUR: Logical Operators
*/
console.log(`\n---Activity Four---\n`);

// Task 11: By using '&&' operator , combine two condition and log the value to the console

const condition1 = 5 > 3; // True
const condition2 = 10 < 15; // True

const result = condition1 && condition2;

console.log(`Both conditions are true: ${result}`);

// Task 12: By using '||' operator , combine two condition & log the value to the console

const condition3 = 5 > 10; // False
const condition4 = 10 < 15; // True

const result2 = condition1 || condition2;

console.log(`At least one of the conditions is true: ${result}`);

// Task 13: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console

const condition = 5 > 10; // False

const result3 = !condition;

console.log(`The negation of the condition is: ${result}`);

/*
ACTIVITY FIVE: Ternary Operator
*/

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

const ternaryNumber = -5;

const check = ternaryNumber > 0 ? 'Positive' : 'Negative';
console.log(`The number ${ternaryNumber} is ${result}.`);
