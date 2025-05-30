
const arr = [0,1,false,2,'',3,null,undefined];

function removeFalseValue(array){
    //Both will work
    //const newArray = array.filter(Number);
    const newArray = array.filter(Boolean);
    console.log(newArray)
}

removeFalseValue(arr);

// output : [1,2,3]