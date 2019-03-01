
function playGames(){
    var idx = 0;
    var highScore = 0;

    while (idx < 100){
        var gameScore = oneGame();
        if(gameScore > highScore){
            highScore = gameScore;
        }
        idx++;        
    }
    var scoreCtrl = document.getElementById("score");

    scoreCtrl.value = highScore;
}

function oneGame(){
    console.log("dice function called");
    var total = 0;
    var roll = rollTheDie();
    while(roll !=1){

        total += roll;

        roll=rollTheDie();
    }
    return total;
}

function rollTheDie(){
    return Math.floor(Math.random()*6 + 1);
}