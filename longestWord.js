/**
 * write a function to find loagest word in the string,
 * input : my name is mangal das
 * output : mangal
 * 
 */

const str = 'My name is Mangal das';

function findLongWord(str){
    const strToArr = str.split(" ");
    const longWord = strToArr.sort((a,b)=> a.length - b.length).at(-1)
}

function findLogestWordWithReduce(str){
    const strToArr = str.split(" ");
    const word = strToArr.reduce((prev,curr)=>{
        return prev.length > curr.length ? prev : curr
    })
     console.log(word);
}

findLogestWordWithReduce(str)