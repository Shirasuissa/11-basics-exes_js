// Task 1: Sum All Digits of a 5-Digit Number
// save a 5 digit number in a variable. Calculate and print the sum of its digits.
// Example: Input: 58423 -> Output: Sum is 22

let number = 58423; // INPUT
let sum=0;
while(number>0)
{
    let numS= number%10;
    sum=numS+sum;
    number = Math.floor(number / 10);
}
console.log("Sum is "+ sum)

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

