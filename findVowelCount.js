const str = "Hey! This is Mangal";
const vowels = ["a", "e", "i", "o", "u"];

function findVowelCount(str) {
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((ch) => {
      vowels.includes(ch) && count++;
    });
  console.log(count);
}

function findVowelEachCount(str){
    let obj = {};
    str.toLowerCase().split("").forEach(ch=>{
        if(vowels.includes(ch)){
            obj[ch] = obj[ch]?obj[ch] + 1 :1;
        }
    })

    console.log(obj)
}

findVowelCount(str)
findVowelEachCount(str)
