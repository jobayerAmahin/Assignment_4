//Task 1
function calculateTax(income, expenses){
    if(income>=0 && expenses>=0 && income>=expenses){
        let tax=(income-expenses)*(20/100);
        return console.log(tax);
    }
    else{
        return console.log("Invalid Input");
    }
}

//-----------------------------------------------------Task 2
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

//-----------------------------------------------------Task 3
function checkDigitsInName(name){
    if(typeof(name)==="string"){
        let storingNaNoutput=new Array();
        for(let n of name){
            storingNaNoutput.push(isNaN(n));
        }

        if(storingNaNoutput.includes(false)){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
    else{
        return console.log("Invalid Input");
    }
}

//-----------------------------------------------------Task 4
function calculateFinalScore(profileDetails){
    if(typeof(profileDetails)==="object"){
        let name=profileDetails.name;
        let score=profileDetails.testScore;
        let grade=profileDetails.schoolGrade;
        let father=profileDetails.isFFamily;
        if(typeof(name)==="string" && score<=50 && typeof(score)==="number" && grade<=30 && typeof(score)==="number" && typeof(father)==="boolean"){
            let finalScore=score+grade;
            if(father===true){
                finalScore=finalScore+20;
            }
            if(finalScore>=80){
                return console.log(true)
            }
            else{
                return console.log(false)
            }
        }
        else{
            return console.log("Invalid Input");
        }
    }
    else{
        return console.log("Invalid Input");
    }

}

//--------------------------------------------------------Task 5
function waitingTime(waitingTimesArr,serialNumber){
    if(typeof(serialNumber)==="number" && Array.isArray(waitingTimesArr)===true){
        let sum=0;
        let givenSerial=waitingTimesArr.length;
        if(givenSerial<serialNumber){
            for(let t of waitingTimesArr){
                sum+=t;
            }
            let avgTime=Math.round(sum/givenSerial);
            let remainSerial=serialNumber-givenSerial-1;
            let timeNeed=avgTime*remainSerial;

            return console.log(timeNeed);
        }
        else{
            return console.log("Invalid Input")
        }
    }
    else{
        return console.log("Invalid Input")
    }
}


