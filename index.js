var round = 0
var winscore = 0
var losescore = 0
var alwaysscore = 0
// 0 ค้อน   1 กรรไกร    2 กระดาษ

function addRound(){
    round += 1
}

function playGame(game){
    let bot = Math.floor(Math.random()*3)
    if(game=="0"&&bot==1){
        winscore += 1
    }else if(game=="1"&&bot==2){
        winscore += 1
    }else if(game=="2"&&bot==0){
        winscore += 1
    }else if(game==bot){
        alwaysscore += 1
    }else{
        losescore += 1
    } 
    addRound()
    document.getElementById("score").innerHTML = "Round : "+round+"  Win :"+winscore+"  Lose :"+losescore+"   Always : "+alwaysscore
}

document.getElementById("score").innerHTML = "Round : "+round+"  Win :"+winscore+"  Lose :"+losescore+"   Always : "+alwaysscore