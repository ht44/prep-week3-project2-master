/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
var firstNumber;
var secondNumber;

function minimum(num1, num2) {
  if (num1 < num2) {
    return "Smaller number = " + num1;
  } else if (num1 > num2) {
    return "Smaller number = " + num2;
  } else if (num1 === num2) {
    return "The numbers are equal";
  } else {
    return "Bad input"
  }
};

document.getElementById("q1btn").addEventListener("click", function () {
  firstNumber = parseInt(document.getElementById("q1inputA").value);
  secondNumber = parseInt(document.getElementById("q1inputB").value);
  document.getElementById("q1").innerHTML += "<p>" + minimum(firstNumber, secondNumber) + "</p>";
});

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

var num3first;
var num3second;
var num3third;

function minimum3(num3A, num3B, num3C) {
  if (num3A === num3B && num3A === num3C) {
    return "All three numbers are equal";
  } else if (num3A <= num3B && num3A <= num3C) {
    return "Smallest number = " + num3A;
  } else if (num3B <= num3A && num3B <= num3C) {
    return "Smallest number = " + num3B;
  } else if (num3C <= num3A && num3C <= num3B) {
    return "Smallest number = " + num3C;
  } else {
    return "Bad input";
  }
};

document.getElementById("q2btn").addEventListener("click", function () {
  num3first = parseInt(document.getElementById("q2inputA").value);
  num3second = parseInt(document.getElementById("q2inputB").value);
  num3third = parseInt(document.getElementById("q2inputC").value);
  document.getElementById("q2").innerHTML += "<p>" + minimum3(num3first, num3second, num3third) + "</p>";
});


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

var sumResult = 0;
var sumSet = [];

function sum(set) {
  for (i = 0; i < set.length; i++) {
    sumResult += set[i];
  }
  return sumResult;
};

document.getElementById("q3btnA").addEventListener("click", function () {
  sumSet.push(parseInt(document.getElementById("q3input").value));
  document.getElementById("q3a").innerHTML = sumSet.join(", ");
});
document.getElementById("q3btnDEL").addEventListener("click", function () {
  sumSet.pop();
  document.getElementById("q3a").innerHTML = sumSet.join(", ");
});
document.getElementById("q3btnB").addEventListener("click", function () {
  document.getElementById("q3b").innerHTML = sum(sumSet);
  sumResult = 0;
});



// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.


var productResult = 1;
var productSet = [];

function multiply(productValues) {
  for (j = 0; j < productValues.length; j++) {
    productResult *= productValues[j];
  }
  return productResult;
};

document.getElementById("q4btnA").addEventListener("click", function () {
  productSet.push(parseInt(document.getElementById("q4input").value));
  document.getElementById("q4a").innerHTML = productSet.join(", ");
});
document.getElementById("q4btnDEL").addEventListener("click", function () {
  productSet.pop();
  document.getElementById("q4a").innerHTML = productSet.join(", ");
});
document.getElementById("q4btnB").addEventListener("click", function () {
  document.getElementById("q4b").innerHTML = multiply(productSet);
  productResult = 1;
});





// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus (filterWords) {
  for (k = 0; k < filterWords.length; k++) {
    var wordLength = filterWords[k];
    if (wordLength.length < 6) {
      filterWords.splice(k, 1);
      k--;
    }
  }
  document.getElementById("q5").innerHTML = filterWords.join(", ");
};

filterSixPlus(words);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

var tempInput;

function convert(temp) {
  return (temp * 1.8 + 32).toFixed(2);
};

document.getElementById("q6btn").addEventListener("click", function () {
  tempInput = parseFloat(document.getElementById("q6input").value);
  document.getElementById("q6").innerHTML = "Fahrenheit = " + convert(tempInput);
});





// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.

var conversionOrder;
var tempToConvert;

document.getElementById("q7btn").addEventListener("click", function () {
  conversionOrder = document.getElementById("q7inputA").value.toUpperCase();
  tempToConvert = parseFloat(document.getElementById("q7inputB").value);
  document.getElementById("q7").innerHTML = "<p>Result = " + convertOption(tempToConvert) + "</p>";
});

function convertOption(tempOption) {
  if (conversionOrder === "F TO C") {
    return ((tempOption - 32) / 1.8).toFixed(2);
  } else if (conversionOrder === "C TO F") {
    return (tempOption * 1.8 + 32).toFixed(2);
  } else {
    return "Error";
  }
};


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

var bString;
var bCount = 0;

document.getElementById("q8btn").addEventListener("click", function () {
  bString = document.getElementById("q8input").value;
  document.getElementById("q8").innerHTML = "Number of Bs = " + countBs(bString);
  bCount = 0;
});

function countBs(stringB) {
  for (b = 0; b < stringB.length; b++) {
    if (stringB[b].toUpperCase() === 'B') {
      bCount += 1;
    }
  }
  return bCount;
};



// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

var stringInput;
var charInput;
var charCounter = 0;

function countChars(string, char) {
  for (v = 0; v < string.length; v++) {
    if (string[v] === char) {
      charCounter += 1;
    } else if (char.length > 1) {
      return "Error";
    }
  }
  return charCounter;
};

document.getElementById("qAbtn").addEventListener("click", function () {
  stringInput = document.getElementById("qAinputA").value.toUpperCase();
  charInput = document.getElementById("qAinputB").value.toUpperCase();
  document.getElementById("qa").innerHTML = "Number of " + charInput + "s = " + countChars(stringInput, charInput);
  charCounter = 0;
});

// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.

var zeroString;

function ohZero(string) {
  var zeroSplit = string.split("");
  for (z = 0; z < zeroSplit.length; z++) {
    if (zeroSplit[z] === "o") {
      zeroSplit[z] = 0;
    }
  }
  return zeroSplit.join("");
};

document.getElementById("qBbtn").addEventListener("click", function () {
  zeroString = document.getElementById("qBinput").value.toLowerCase();
  document.getElementById("qb").innerHTML = "'O's are now '0's: " + ohZero(zeroString);
});



// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function lyricPrint() {
  var bottleNum = 99;
  while (bottleNum > 2) {
    document.getElementById("qc").innerHTML += "<p>" + bottleNum + " bottles of beer on the wall, " + bottleNum + " bottles of beer. Take one down and pass it around, " + (bottleNum - 1) + " bottles of beer on the wall.</p>";
    bottleNum--;
  }
  document.getElementById("qc").innerHTML += "<p>" + bottleNum + " bottles of beer on the wall, " + bottleNum + " bottles of beer. Take one down and pass it around, " + (bottleNum - 1) + " bottle of beer on the wall.</p>";
  bottleNum -= 1;
  document.getElementById("qc").innerHTML += "<p>" + bottleNum + " bottle of beer on the wall, " + bottleNum + " bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.</p>";
  document.getElementById("qc").innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.</p>";
};

lyricPrint();




// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.

function guessingGame() {
  var computerGuess = Math.floor(Math.random() * 30) + 1;
  var userGuess = prompt("Pick a number between 1 and 30:");
  while (parseInt(userGuess) !== computerGuess && userGuess !== null) {
    var userGuessNum = parseInt(userGuess);
    if (userGuessNum > 30 || userGuessNum < 1) {
      userGuess = prompt("Please enter a number between 1 and 30:")
    } else if (userGuessNum > computerGuess) {
      userGuess = prompt("Too high. Pick another number between 1 and 30:");
    } else if (userGuessNum < computerGuess) {
      userGuess = prompt("Too low. Pick another number between 1 and 30:");
    } else {
      userGuess = prompt("Please enter a number between 1 and 30:")
    }
  }
  if (userGuess === null) {
    return "You cancelled.";
  } else {
    return "You guessed it! The number was " + computerGuess + ".";
  }
};


document.getElementById("qDbtn").addEventListener("click", function () {
  document.getElementById("qd").innerHTML = guessingGame();
});
