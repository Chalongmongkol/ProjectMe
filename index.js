var round = 0
var winscore = 0
var losescore = 0
var alwaysscore = 0
var myplay = ""
var botplay = ""
// 0 ค้อน   1 กรรไกร    2 กระดาษ

function addRound(){
    round += 1
}

function setplay(bot,game){
    if(game==0){
        document.getElementById("me").innerHTML = "<img src='picture/rock.png' class='game-img'>"
    }else if(game==1){
        document.getElementById("me").innerHTML = "<img src='picture/scissors.png' class='game-img'>"
    }else{
        document.getElementById("me").innerHTML = "<img src='picture/paper.png' class='game-img'>"
    }
    if(bot==0){
        document.getElementById("bot").innerHTML = "<img src='picture/rock.png' class='game-img'>"
    }else if(bot==1){
        document.getElementById("bot").innerHTML = "<img src='picture/scissors.png' class='game-img'>"
    }else{
        document.getElementById("bot").innerHTML = "<img src='picture/paper.png' class='game-img'>"
    }
}


function playGame(game){
    let bot = Math.floor(Math.random()*3)
    if(game=="0"&&bot==1){
        winscore += 1
        document.getElementById("result").innerHTML = "Win"
    }else if(game=="1"&&bot==2){
        winscore += 1
        document.getElementById("result").innerHTML = "Win"
    }else if(game=="2"&&bot==0){
        winscore += 1
        document.getElementById("result").innerHTML = "Win"
    }else if(game==bot){
        alwaysscore += 1
        document.getElementById("result").innerHTML = "Draw"
    }else{
        losescore += 1
        document.getElementById("result").innerHTML = "lose"
    } 
    setplay(bot,game)
    addRound()
   
document.getElementById("score").innerHTML = "Scoreboard<br>Round : "+round+"<br>Win : "+winscore+"<br>Lose : "+losescore+"<br>Draw : "+alwaysscore
}

document.getElementById("score").innerHTML = "Scoreboard<br>Round : "+round+"<br>Win : "+winscore+"<br>Lose : "+losescore+"<br>Draw : "+alwaysscore
document.getElementById("result").innerHTML = "?"
