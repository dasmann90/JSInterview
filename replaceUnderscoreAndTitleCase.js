// input : my_name_is_mangal
// output : My Name Is Mangal


const str = 'my_name_is_mangal';

function formatString(str){
    let strToArray = str.split("_");
    return strToArray = strToArray.map((x)=> x.charAt(0).toUpperCase()+x.slice(1)).join(" ");
    
}

// output : my_name_is_mangal
// input : My Name Is Mangal
const inputStr = 'My Name is Mangal'
function replaceSpaceWithUnderScore(str){
   const newStr =  str.toLowerCase().replaceAll(" ", '_');
   console.log(newStr)
}

const formatStr = formatString(str);

replaceSpaceWithUnderScore(inputStr)
