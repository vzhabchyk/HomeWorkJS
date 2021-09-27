let number = prompt('Enter a five-digit number.');

const fifthDigit = number % 10;

number = (number - fifthDigit) / 10;
const fourthDigit = number % 10; 

number = (number - fourthDigit) / 10;
const thirdDigit = number % 10;

number = (number - thirdDigit) / 10;
const secondDigit = number % 10;

number = (number - secondDigit) / 10;
const firstDigit = number % 10;

console.log('Your number separated by space:')
console.log(firstDigit + ' ' + secondDigit + ' ' + thirdDigit + ' ' + fourthDigit + ' ' + fifthDigit);