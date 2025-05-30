const str = "Hey ! This is Mangal";

function findCountOfEachCharOfString(str) {
  const obj = {};
  str = str.toLowerCase();
  for (const element of str) {
    obj[element] = obj[element] ? obj[element] + 1 : 1;
  }
  console.log(obj);
}

findCountOfEachCharOfString(str);
