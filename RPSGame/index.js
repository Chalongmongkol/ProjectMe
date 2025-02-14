var round = 0
var winscore = 0
var losescore = 0
var alwaysscore = 0
var test =0

// 0 ค้อน   1 กรรไกร    2 กระดาษ

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

function openModal(){
    document.getElementById("modal").style.display = "flex";
}

function addRound(){
    round += 1
}

function setplay(bot,game){
    if(game==0){
        document.getElementById("me").innerHTML = "<img src='/picture/rock.png' class='game-img'>"
    }else if(game==1){
        document.getElementById("me").innerHTML = "<img src='/picture/scissors.png' class='game-img'>"
    }else{
        document.getElementById("me").innerHTML = "<img src='/picture/paper.png' class='game-img'>"
    }
    if(bot==0){
        document.getElementById("bot").innerHTML = "<img src='/picture/rock.png' class='game-img'>"
    }else if(bot==1){
        document.getElementById("bot").innerHTML = "<img src='/picture/scissors.png' class='game-img'>"
    }else{
        document.getElementById("bot").innerHTML = "<img src='/picture/paper.png' class='game-img'>"
    }
}


function addloglist(me,bot){
    //win rock Scissors
    if(me=="0"&&bot==1){
        document.getElementById("log-list-page").innerHTML += "<div class='log-list'><img src='/picture/rock.png' class='log-img'><p>Win</p><img src='/picture/Scissors.png' class='log-img'></div>"    
    }
    //win Scissors paper
    else if(me=="1"&&bot==2){
        document.getElementById("log-list-page").innerHTML += "<div class='log-list' ><img src='/picture/Scissors.png' class='log-img'><p>Win</p><img src='/picture/paper.png' class='log-img'></div>" 
    }
    //win paper rock
    else if(me=="2"&&bot==0){
        document.getElementById("log-list-page").innerHTML += "<div class='log-list'><img src='/picture/paper.png' class='log-img'><p>Win</p><img src='/picture/rock.png' class='log-img'></div>" 
    }
    //draw 
    else if(bot==me){
        if(me==0){
            document.getElementById("log-list-page").innerHTML += "<div class='log-list' ><img src='/picture/rock.png' class='log-img'><p>Draw</p><img src='/picture/rock.png' class='log-img'></div>" 
        }else if(me==1){
            document.getElementById("log-list-page").innerHTML += "<div class='log-list' ><img src='/picture/Scissors.png' class='log-img'><p>Draw</p><img src='/picture/Scissors.png' class='log-img'></div>" 
        }else{
            document.getElementById("log-list-page").innerHTML += "<div class='log-list'><img src='/picture/paper.png' class='log-img'><p>Draw</p><img src='/picture/paper.png' class='log-img'></div>" 
        }
    }
    //lose rock paper
    else if(me=="0"&&bot==2){
        document.getElementById("log-list-page").innerHTML += "<div class='log-list' ><img src='/picture/rock.png' class='log-img'><p>Draw</p><img src='/picture/paper.png' class='log-img'></div>"
    }
    //lose Scissors rock
    else if(me=="1"&&bot==0){
        document.getElementById("log-list-page").innerHTML += "<div class='log-list' ><img src='/picture/Scissors.png' class='log-img'><p>Draw</p><img src='/picture/rock.png' class='log-img'></div>"
    }
    //lose paper Scissors
    else{
        document.getElementById("log-list-page").innerHTML += "<div class='log-list' ><img src='/picture/paper.png' class='log-img'><p>Draw</p><img src='/picture/Scissors.png' class='log-img'></div>"
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
addloglist(game,bot)
}

document.getElementById("score").innerHTML = "Scoreboard<br>Round : "+round+"<br>Win : "+winscore+"<br>Lose : "+losescore+"<br>Draw : "+alwaysscore
document.getElementById("result").innerHTML = "?"



