/*
Variable Types Console Log: 
- Write a script that declares variables of different data types and logs both the value and type of each variable to the console 
*/

// Declare variables of different data types

// Primitive Data Types
let numberVar = 42;
let stringVar = 'Hello, world!';
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let symbolVar = Symbol('uniqueSymbol');
let bigIntVar = BigInt(1234567890123456789012345678901234567890n);

// Non-Primitive Data Types
// The object data type can contain both built-in objects, and user defined objects:
// Built-in object types can be: objects, arrays, dates, maps, sets, intarrays, floatarrays, promises etc ...
let objectVar = { name: 'Onkar', age: 25 };
let arrayVar = [1, 2, 3];
let functionVar = function () {
  return 'I am a function';
};

// Log the value and type of each primitive variable to the console
console.log('numberVar:', numberVar, 'Type:', typeof numberVar);
console.log('stringVar:', stringVar, 'Type:', typeof stringVar);
console.log('booleanVar:', booleanVar, 'Type:', typeof booleanVar);
console.log(
  'nullVar:',
  nullVar,
  'Type:',
  typeof nullVar,
  'returning Object as a type for null is a quirk in JavaScript',
);
console.log('undefinedVar:', undefinedVar, 'Type:', typeof undefinedVar);
console.log('symbolVar:', symbolVar, 'Type:', typeof symbolVar);
console.log('bigIntVar:', bigIntVar, 'Type:', typeof bigIntVar);
console.log('objectVar:', objectVar, 'Type:', typeof objectVar);
console.log('arrayVar:', arrayVar, 'Type:', typeof arrayVar);
console.log('functionVar:', functionVar, 'Type:', typeof functionVar);
