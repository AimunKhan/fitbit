//Work in Progress


int main(){
    int arrHR[6]={avgHr, avgHr, avgHr, vgHr, avgHr, avgHr};
    arrMsgGrp[10]=initMsgGrp();
    response = 0;
    while(goHome!=1){}
        int avgHR=pastHR(arrHR); //computes average
        forAGoodTime();
        int dHR=histHR-curHR; //calcs change - histHR is first 10
        if(((dHR<-7)&&(response==0))||isSleeping();){
            int status=isSleeping();
            if(status!=0){
                status=howDrunk(dHR);
            }
            sendMsg(status);
            response=checkResponse();
        }
    }
    getHome();
    atHome();
    break;

}

int forAGoodTime(int weight, int gender){
    int SD=StDrinks(weight, gender, 0.5);
    printf("For a nice time, drink %d drinks an hour", SD);
    SD=StDrinks(weight, gender, 0.1);
    printf("For a nice time, drink %d drinks an hour", SD);
    SD=StDrinks(weight, gender, 0.2);
    printf("To ruin your night with vomit,  drink %d drinks an hour", SD);
    SD=StDrinks(weight, gender, 0.3);
    printf("To risk death, drink %d drinks an hour", SD);


}

int StDrinks(int Weight, int Gender, int BAC){
    int wRatio;
    if(Gender==0) wRatio=0.49;
    else wRatio=0.58;
    return Weight*wRatio*1.034*BAC+0.017;
    }

int pastHR(int arrHR[]){
    int sum=0;
    for(int i=0;i<5;i++){
        arr[i]=arr[i+1];
        sum+=arr[i];
    }
    arr[2]=polledHR();
    sum+=arr[2];
    return sum/3;
}

int isSleeping(){
    //access data from fitbit, return 0 if sleeping
}


int howDrunk(int dHR){
    if(dHR>-10) return 1;
    else if(dHR>-13) return 2;
    else return 3;
}

int findLoc(){
    int arr[2];//lat, long
    //Web App
    return add;

}


void sendMsg(int status){
    char *msg;
    char *userLoc=findLoc();
    if(status==0){
        *msg="(userName) is sleeping. His current location is (userLoc)";
    }
    else if(status==1){
        *msg="(userName) needs an eye on him. His current location is (userLoc)";
    }
    else if(status==2){
        *msg="(userName) needs to stop drinking. His current location is (userLoc)";
    }
    else{
        *msg="(userName) is a sever danger to himself. His current location is (userLoc)";
    }
    //Access Text API
    //https://www.eztexting.com/developers/sms-api-documentation/rest
}

int checkResponse(int arr[]){
    //Text API
}

int getHome(){

}

int atHome(){

}
