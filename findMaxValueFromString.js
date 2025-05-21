
/**
 * input : ['20-30-67','2-9-19','10-11-20']
 * output : [67,19,20]
 */
const arrString = ['20-30-67','2-9-19','10-11-20'];

function findMaxValue(arr){
    // using for loop
    let maxValue = [];
    for (const element of arr) {
        const value = Math.max(...(element.split("-")));
        maxValue.push(value)
    }

    // using map

    const maxArray = arr.map((x)=> Math.max(...x.split("-")) )

    console.log(maxArray);
    
}

findMaxValue(arrString)