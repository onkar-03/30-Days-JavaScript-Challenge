// Comparison and Logical Operators Script:
// - Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

// Define two numbers
const num1 = 10;
const num2 = 15;

// Comparison Operators
const isEqual = num1 == num2;
const isStrictEqual = num1 === num2;
const isNotEqual = num1 != num2;
const isStrictNotEqual = num1 !== num2;
const isGreater = num1 > num2;
const isLess = num1 < num2;
const isGreaterOrEqual = num1 >= num2;
const isLessOrEqual = num1 <= num2;

// Logical Operators
const andCondition = isGreater && isLessOrEqual; // Combining conditions using &&
const orCondition = isGreater || isLess; // Combining conditions using ||
const notCondition = !isEqual; // Negating a condition using !

// Log Comparison Results
console.log(`Comparing ${num1} and ${num2}:`);
console.log(`num1 == num2: ${isEqual} (Equality)`);
console.log(`num1 === num2: ${isStrictEqual} (Strict Equality)`);
console.log(`num1 != num2: ${isNotEqual} (Not Equal)`);
console.log(`num1 !== num2: ${isStrictNotEqual} (Strict Not Equal)`);
console.log(`num1 > num2: ${isGreater} (Greater Than)`);
console.log(`num1 < num2: ${isLess} (Less Than)`);
console.log(`num1 >= num2: ${isGreaterOrEqual} (Greater Than or Equal To)`);
console.log(`num1 <= num2: ${isLessOrEqual} (Less Than or Equal To)`);

// Log Logical Results
console.log(`\nCombining Conditions:`);
console.log(`isGreater && isLessOrEqual: ${andCondition} (AND)`);
console.log(`isGreater || isLess: ${orCondition} (OR)`);
console.log(`!isEqual: ${notCondition} (NOT)`);
