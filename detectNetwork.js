// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  var prefixTwo = parseInt(cardNumber.slice (0, 2), 10);
  var prefixOne = parseInt(cardNumber.slice (0, 1), 10);
  var prefixThree = parseInt(cardNumber.slice (0, 3), 10);
  var prefixFour = parseInt(cardNumber.slice (0, 4), 10);
  var prefixSix = parseInt(cardNumber.slice(0, 6), 10);
  if ((prefixTwo === 38 || prefixTwo === 39) && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  } else if ((prefixTwo === 34 || prefixTwo === 37) && cardNumber.length === 15) {
  	return 'American Express';
  } else if ((prefixFour === 4903 || prefixFour === 4905 || prefixFour === 4911 || prefixFour === 4936 || prefixSix === 564182 || prefixSix === 633110 || prefixFour === 6333 || prefixFour === 6759) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch';
  } else if (prefixOne === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
  } else if ((prefixTwo > 50 && prefixTwo < 56) && cardNumber.length === 16) {
  	return 'MasterCard';
  } else if ((prefixFour === 6011 || (prefixThree > 643 && prefixThree < 650) || prefixTwo === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Discover';
  } else if ((prefixFour === 5018 || prefixFour === 5020 || prefixFour === 5038 || prefixFour === 6304) && (cardNumber.length > 11 && cardNumber.length < 20)) {
  	return 'Maestro';
  } else if (((prefixSix > 622125 && prefixSix < 622926) || (prefixThree > 623 && prefixThree < 627) || (prefixFour > 6281 && prefixFour < 6289)) && (cardNumber.length > 15 && cardNumber.length < 20)) {
    return 'China UnionPay';
  }
};