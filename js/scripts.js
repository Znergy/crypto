/**** Not the first step ****/

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



/**** First Test Case ****/

// this will take a string of any length, use the total length to determine the total rows and columns needed (eg. 12 = 3x4, 8 = 2x4)

var string = "123456789011";
var squareRoot = Math.sqrt(string.length);
var rows = Math.floor(squareRoot);
var columns = (string.length / rows);


console.log("Total Columns: " + columns);
console.log("Total rows: " + rows);

/**** Second Test Case ****/

// this will take a string, count the length minus the spaces, then use string.length to calculate the necessary rows and columns (eg. 12 = 3x4), if you run this in jsfiddle it will spit out exactly what is taking place.

// this does not implement part of the rows algorithm (rows = rows - 1, http://stackoverflow.com/questions/6377362/calculating-or-rows-and-columns)

var initialString = "12345 67890";
var stringArray = initialString.split(" ");
var noSpacesString = stringArray.join("");

var squareRoot = Math.sqrt(noSpacesString.length);
var rows = Math.floor(squareRoot);
var columns = (noSpacesString.length / rows);

console.log("Initial String: " + initialString + ", length: " + initialString.length);
console.log("String w/o spaces: " + noSpacesString + ", length: " + noSpacesString.length);
console.log("Total Columns: " + columns);
console.log("Total rows: " + rows);





