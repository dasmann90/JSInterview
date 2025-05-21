// input =>  a.b.c.d.e
// output => {a:{b:{c:{d:e}}}}

const inputStr = "a.b.c.d.e";

const convertToObj = inputStr.split(".").reduceRight((accu,next)=>{
    return {[next]:accu}
})

console.log(convertToObj)

