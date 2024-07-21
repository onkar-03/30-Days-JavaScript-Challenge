/*
Reassignment Demo: 
- Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
*/

// Using let for variable declaration
let variableLet = 10;
console.log('Before reassignment (let):', variableLet); // Output: 10

// Reassigning the let variable
variableLet = 20;
console.log('After reassignment (let):', variableLet); // Output:20

// Using const for variable declaration
const variableConst = 99;
console.log('Before reassignment (const):', variableConst); // Output: 99

// Trying to reassign the const variable
try {
  variableConst = 'Reassigned value with const';
} catch (error) {
  console.log('Error during reassignment (const):', error.message); // Output: Assignment to constant variable
}
