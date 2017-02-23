/**** First Test ****/

// wrongly assumed that the first step was breaking down the string into single letters, and then manually setting a row length, which when triggered would save the remaining characters to another array..
// this may come in later but not before I figure out the math to auto determine row/column size based on starting char count.

var string = "dont do this dont do this";

var array1 = string.split(" ");
var changedString = array1.join("");

var array2 = changedString.split("");

var array3 = [];
// convert a string to array, remove spaces, break into single letters, and test the length of when the letters need to be added to another array
console.log("Changed String: " + changedString);
console.log("Array 2: " + array2);

// this saves all the entries into another array.
// it should only insert once i == 8 or more
for (i=0; i<array2.length; i++) {
  if (i >= 8) {
    array3.push(array2[i]);
  }
 }
 
 console.log("Array 3: " + array3);
