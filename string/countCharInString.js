const name = 'Mangal Kumar Das';

let obj = {}

for (const element of name) {
    if(obj[element]){
        obj[element] +=1
    }else{
        obj[element] = 1;
    }
}

console.log(obj);



