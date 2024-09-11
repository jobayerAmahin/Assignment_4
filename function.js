
//Task 2

function sendNotification(givenEmail){
    if(givenEmail.includes('@')===true){
        let atTheRateIndex=givenEmail.indexOf('@');
        let userName=givenEmail.slice(0,atTheRateIndex);
        let domainName=givenEmail.slice(atTheRateIndex+1,givenEmail.length);

        return console.log(userName,'sent you an email from',domainName);
    }
    else{
        return console.log("Invalid Email");
    }
}
