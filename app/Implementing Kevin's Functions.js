
// If wearer's heart rate falls below "Danger" Threshold or below "Sleeping" Threshold, send bulk messages to list of contacts until wearer is found
// x has username, pronoun, and location
// x values are Arjun's responsibility
// !!!!!!! Add more cases maybe

function SendMsg(x, status){
    var sleeping = 0;
    var tipsy = 1;
    var drunk = 2;
    var veryDrunk = 3;
    var dangerouslyDrunk = 4;
    var msg;
    if(status = sleeping)
        msg = new String(x.name + " has fallen asleep at "+ x.location + ". Please check on " + x.name + ".");
    else if(xstatus = drunk)
        msg = new String(x.name + " has drunk more alcohol than " + x.name + " should have, and requires water. " + x.name + " is at " + x.location + ". Please check on " + x.name + ".")
    else if(status = veryDrunk)
        msg = new String(x.name + " has drank too much alcohol to the point that " + x.name + " heart rate is dangerously low. " + x.name + " is at " + x.location + ".")
    return msg;
}

// Return average of the array after updating elements
// arrHR[0] holds oldest value
// Need polledHR
function pastHR(arrHR, polledHR){
    var sum = 0;
    for(i = 0; i < arrHR.length; i+=1){
        arrHR[i] = arrHR[i+1];
        sum += arr[i];
    }
    arrHR[arrHR.length-1] = polledHR;
    sum +=arr[arrHR.length-1];
    return sum/arrHR.length;
}

// isSleeping is a variable I need from Fitbit side


// Returns change in HR from original HR
function calcDHR(histHR, curHR){
    return histHR - curHR;
}

// howDrunk - returns status
function howDrunk(dHR, isSleeping){
    if(isSleeping) return 0;
    else if(dHR > -10) return 1; //tipsy
    else if(dHR > -13) return 2; //vomit
    else return 4; //dangerouslyDrunk
}

// Returns Boolean of if he is drunk
function isDrunk(dHR, isSleeping){
    if((dHR < -7 && (response == 0) || isSleeping) return True;
    else return False;
}
