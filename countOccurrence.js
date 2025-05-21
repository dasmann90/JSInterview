
/* input : [5,5,5,2,2,2,2,9,6];
 output : { 
                "2":5,
                "5":3,
                "9":1,
                "6":1
            } */


const inputArry = [5,5,5,3,3,4,7,7,8];

function findCount(arr){
    let obj = {};
    for (const element of arr) {
        // if(obj[element]){
        //     obj[element] += 1;
        // }else{
        //     obj[element] = 1;
        // }
        // sort code
        obj[element] = obj[element]? obj[element]+1 :1
    }

    console.log(obj)
}
//findCount(inputArry);

const myIntro = 'My name is Mangal Das';

function findCountOfChar(str,char){
    let count = 0;
    const stringToArr = str.split("");
    for (const element of stringToArr) {
        if(element === char){
            count ++;
        }
    }
    console.log(count)
}

//findCountOfChar(myIntro,'D')



function findCountOfCharWithReduce(str,char){
    const strToArr = str.split("");
  const count = strToArr.reduce((count,value)=>{
        if(value === char){
            count ++
        }
        return count;
    },0)
   
    console.log(count)
}

findCountOfCharWithReduce(myIntro,'D')