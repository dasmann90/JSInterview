// reverse string - Write a Program to reverse a string in JavaScript.

function reverseString(str){
   const reverseStr = str.split(" ").reverse().join(" ");
   console.log(reverseStr)
}

reverseString("Mangal Kumar Das");