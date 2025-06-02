/**
 * When comparing a string with a number,
 * JavaScript will convert the string to a number when doing the comparison.
 *  An empty string converts to 0. A non-numeric string converts to NaN which is always false .
 * When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
 */
console.log("Mangal" > 10); // Output : False
console.log("Mangal" < 10); // Output : False
console.log("2" > "123"); // Output : true (Javascript convert "2" to number 2 and "123" to 1)
console.log("2" > "323"); // output : false

let a = 100;
// 101 + 101
const b = ++a + a++;
//100 + 102
//const c = a++ + ++a;

console.log(b); // output : 202 (preincrement ++a convert a value  to 101 and post increment exc in next line so value 101)

//[y] = [1,2,3]
//console.log(y) // undfine

//Array

let name = "Mangal";
name[0] = "D";
console.log(name); // Output : Mangal

// Object

const obj = {};
const obj1 = { key: "b" };
const obj2 = { key: "c" };

obj[obj1] = 123;
obj[obj2] = 456;

//dry run
/**
 * obj[value of obj1] => Just becuse value is object it will convert like obj[Object Objcet] = 123
 * obj[value of obj2] => Just becuse value is object it will convert like obj[Object Objcet] = 456
 */
console.log(obj) // output : {[object object]:456}
