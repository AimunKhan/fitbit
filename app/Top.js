/**********Main**********/
var arrHR = [1,2,3,4,5,6]; // Fitbit needs to initialize this
var histHR = arrHR; // Copied ONLY ONCE - this is the original data set
response = 0;
var isSleeping = 0; // Fitbit needs to initialize this
var status = 0;
var user;
var avgHR;
user.name = "Joe"; // Needs to be initialized by website
user.location = 1; // Needs to be initialized by website

while(1){
    // update values
    polledHR = updateHR(); // need to get value from Fitbit
    avgHR = pastHR(arrHR, polledHR);
    updateIsSleeping(); // need to get value from Fitbit
    calcDHR(histHR, avrHR);
    // Check if drunk
    if(isDrunk){
        status = howDrunk(dHR, isSleeping);
        SendMsg(user, status);
    }
}
