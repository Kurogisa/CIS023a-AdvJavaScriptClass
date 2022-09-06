/*
Sort a list of comma string first names entered by the user

You will follow the below steps:
(1) Use prompt to get a set of comma separated strings, example, "John, Adam, Smith"
(2) Use the JavaScript split method (https://www.w3schools.com/jsref/jsref_split.asp) to save the values into an Array
(3) Use the Array sort method (see Chapter 5 for example of Array sort) to sort the list of string
(4) Use the join method (https://www.w3schools.com/jsref/jsref_join.asp) to create a string from the sorted array
(5) Display the result on the web page using the document.write
*/

let firstNames = "Kuroko, Akashi, Nagisa, Karma";
const nameArray = firstNames.split(", ");
//let test = nameArray[1];
//console.log(test);
const sortedArray = nameArray.sort();
//document.write(firstNames + "<br>");
let newNameList = sortedArray.join(", ");
//console.log(newNameList);
document.write(newNameList);
