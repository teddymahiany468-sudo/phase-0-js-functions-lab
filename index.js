// 1. calculateTax
const calculateTax = (amount) => {
    const taxrate = 0.1; // 10% tax rate
    const taxAmount = amount * taxrate;
    return taxAmount;
}
const myTax = calculateTax(1000);
console.log( myTax); // Output: 100
// 2. convertToUpperCase
const convertToUpperCase = (str) => {
    return str.toUpperCase();
}
const myString = "hello world";
console.log(convertToUpperCase(myString)); // Output: "HELLO WORLD"
    
// 3. findMaximum
const findMaximum = (num1, num2) => {
    return Math.max(num1, num2 );
}
const maxNumber = findMaximum(5, 10);
console.log(maxNumber); // Output: 10
// 4. isPalindrome
const isPalindrome = (word) => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
const myWord = "racecar";
console.log(isPalindrome(myWord)); // Output: true
// 5. calculateDiscountedPrice
const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
}
const myDiscountedPrice = calculateDiscountedPrice(1000, 10);
console.log(myDiscountedPrice); // Output: 900

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};