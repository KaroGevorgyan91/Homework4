/* task number 6 Given the list of the following readers:

var arr = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall&quot", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 }
];


var nArr = arr.filter(function (el) {
  return el.readStatus === true
});
nArr.sort(function (a, b) {
  return a.percent - b.percent
});
console.log(nArr);
*/


/* task number 1 Given an array of integers, find the pair of adjacent elements that has the largest product
and return that product.

var arr = [100, -5, 3, 2, 8];
var newArr = arr.reduce(function (acc, val, i, arr) {
    acc.push(val * (arr[i-1]? arr[i-1]: -1) );
    return acc

},[]);
newArr.sort (function(a,b){a -b});
console.log(newArr[newArr.length -1]);


*/


/* task number 2 Given an array of integers. All numbers are unique. Find the count of missing numbers
between minimum and maximum elements to make integers sequence.

arr.sort((a, b) => a - b)
var result = arr[arr.length - 1] - arr[0] + 1 - arr.length;
console.log (result)


 */
 
 
 /*Task number 3 Convert a long phrase to its acronym.
 
 function acr(str) {
  var arr, acronym, nextWord;

  arr = str.split(' ');
  acronym = "";
  i = 0
  while (i < arr.length) {
    nextWord = arr[i];
    acronym = acronym + nextWord.charAt(0);
    i += 1;
  }
  return acronym.toUpperCase();
}

var str = 'lord of the rings';
console.log(acr(str))

 
 
 */
 /*Task number 4 Given a string of digits, output all the contiguous substrings of length n in that string.
 
var theString = '495215',
sub = [];

getSubstrings(theString);

function getSubstrings(str) {

  var n = 3;

  for (var i = 0; i < str.length - 2; i++) {

    sub.push(str.substring(n++, i));

  }
  return sub

}

console.log(sub)
 
 
 
 */
 