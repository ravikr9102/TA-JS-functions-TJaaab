// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  return n + 1;
}

// - Write a Function Expression
let addOne = function (n) {
  return n - 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => n + 1;

// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return n + 1;
};

// - Execute the function
addOne(16);

// - Execute the function and store the return value in a variable.
let returnValue1 = addOne(16);

// - What is the typeof returnValue
// typeof returnValue1 is Number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(number) {
  return number - 1;
}
// - Write a Function Expression
let subtractOne = function (number) {
  return number - 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (number) => n - 1;

// - Write an Arrow Function with curly brackets
let subtractOne = (number) => {
  return number - 1;
};
// - Execute the function
subtractOne(21);

// - Execute the function and store the return value in a variable.
let returnValue2 = subtractOne(21);

// - What is the typeof returnValue
// typeof returnValue2 is Number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(num1, num2){
  return num1 + num2;
}

// - Write a Function Expression
let addNumbers = function sum(num1, num2) {
  return num1 + num2;
};

// - Write an Arrow Function without curly brackets(if possible)
let sum = ( num1, num2 ) => num1 + num2;


// - Write an Arrow Function with curly brackets
let sum = (num1, num2) => {
  return num1 + num2;
}

// - Execute the function
sum (10, 21);

// - Execute the function and store the return value in a variable
let returnValue3 = sum (10,21);

// - What is the typeof returnValue
// typeof returnValue is Number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square (number) {
  return number * number;
}

// - Write a Function Expression
let square = function (number) {
  return number * number;
}

// - Write an Arrow Function without curly brackets(if possible)
let square = (number) => number * number;

// - Write an Arrow Function with curly brackets

let square = (number) => {
  return number * number;
};

// - Execute the function
square(5);

// - Execute the function and store the return value in a variable
let returnValue4 = square (5);

// - What is the typeof returnValue
// typeof returnValue4 is Number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y) {
if (x > y ) {
  return `true`;
}
else {
  return `false`;
}
}

// - Write a Function Expression
let isGreater = function (x,y) {
  if (x > y ) {
    return `true`;
  }
  else {
    return `false`;
  }
}

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = ((x,y) => x > y);

// - Write an Arrow Function with curly brackets
let isGreater = (x,y) => {
  return (x > y);
}
// - Execute the function
isGreater(10,20);

// - Execute the function and store the return value in a variable
let returnValue5 = isGreater (10,20);

// - What is the typeof returnValue
//typeof returnvalue5 is "String"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven (number) {
  if (number % 2 === 0) {
    return `even`;
  }
  else {
    return `odd`;
  }
}

// - Write an anonymous Function Expression
let oddOrEven = function (Number) {
  if (number % 2 === 0) {
    return `even`;
  }
  else {
    return `odd`;
  }
}
// - Write an named Function Expression


// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => number % 2 === 0 ? `even` : `odd`;

// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  number % 2 === 0 

}
// - Execute the function
oddOrEven (16);

// - Execute the function and store the return value in a variable
let returnValue6 = oddOrEven (16);

// - What is the typeof returnValue
// typeof returnValue6 is "String"