// Find the largest number in an array in JavaScript.

const arr = [20,10,30,90,95,87];
let maxNumber =  arr[0];

arr.forEach((x,index)=>{
    if(x > maxNumber){
        maxNumber = x;
    }
});

console.log(maxNumber)