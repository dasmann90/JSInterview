// input =>  a.b.c.d.e
// output => {a:{b:{c:{d:e}}}}

const inputStr = "a.b.c.d.e";
let obj = {};
let init = "";

function convertToObject(str) {
  const arr = str.split(".");
  arr.forEach((char) => {
    
    if (init || Object.keys(obj).length) {
        // not first iteration
      let n = { [char]: init || obj };
      obj = n;
      init = '';
    } else {
      init = char;
    }
  });

  return obj;
}

const output = convertToObject(inputStr);

console.log(output);

