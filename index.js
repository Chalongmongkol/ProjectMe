var round = 0
var winscore = 0
var losescore = 0

function addscore(result){
    if(result=="Win"){
        winscore += 1
    }else{
        losescore += 1
    } 
    round += 1
}

document.getElementById("score").innerHTML = "round : "+round+"  win :"+winscore+"  lose :"+losescore 