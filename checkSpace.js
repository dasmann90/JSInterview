const str = "isdas";
function checkSpace(str) {
  const arr = str.split(" ");
  return arr.length > 1 ? 'Yes' : 'No';
}

const isSpace = checkSpace(str);
console.log(isSpace);
