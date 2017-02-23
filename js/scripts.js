/**** First Test ****/

// wrongly assumed that the first step was breaking down the string into single letters, and then manually setting a row length, which when triggered would save the remaining characters to another array..
// this may come in later but not before I figure out the math to auto determine row/column size based on starting char count.

//var string = "dont do this dont do this";
//
//var array1 = string.split(" ");
//var changedString = array1.join("");
//
//var array2 = changedString.split("");
//
//var array3 = [];
//// convert a string to array, remove spaces, break into single letters, and test the length of when the letters need to be added to another array
//console.log("Changed String: " + changedString);
//console.log("Array 2: " + array2);
//
//// this saves all the entries into another array.
//// it should only insert once i == 8 or more
//for (i=0; i<array2.length; i++) {
//  if (i >= 8) {
//    array3.push(array2[i]);
//  }
// }
// 
// console.log("Array 3: " + array3);



/**** Second Test Case ****/

// this will take a string, count the length minus the spaces and commas, then use string.length to calculate the necessary rows and columns (eg. 69 = 9 rows, 8 columns)

// this will take a string of any length, use the total length to determine the total rows and columns needed (eg. 12 = 3x4, 8 = 2x4)

var string = "123456789011";
var squareRoot = Math.sqrt(string.length);
var rows = Math.floor(squareRoot);
var columns = (string.length / rows);


console.log("Total Columns: " + columns);
console.log("Total rows: " + rows);









