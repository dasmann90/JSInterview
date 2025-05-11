// write a program to check string is palindrome or not.

function checkPalindrome(str){
    const value = str.split("").reverse().join("");
    return value === str ? 'Yes':"No";
}

console.log(checkPalindrome('CDC'))