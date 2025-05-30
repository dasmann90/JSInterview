

function generateOTPWithSixDig(len = 6){
    let otp="";
    for(i=0;i<len;i++){
        otp += Math.floor(Math.random()*10);
    }

    return otp;

}

console.log(generateOTPWithSixDig());
