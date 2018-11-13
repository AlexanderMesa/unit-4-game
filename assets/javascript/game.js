//Declares variables for current score, random numbers for crystal and score needed
var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;
var gemArray = [gem1, gem2, gem3, gem4];
var scoreNeeded = Math.floor(Math.random() * 102) + 19;
var totalScore = 0;
var wins = 0;
var losses = 0;

//Writes text in the webpage
$("#score-needed").text(scoreNeeded);
$("#total-score").text(totalScore);
$("#wins-losses").text("Wins: " + wins);
$("#wins-losses").append("<br />")
$("#wins-losses").append("Losses: " + losses);

//Function that resets the game if the player wins or loses
function resetGame(){
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
    gemArray = [gem1, gem2, gem3, gem4];
    scoreNeeded = Math.floor(Math.random() * 108) + 19;
    totalScore = 0;

    $("#score-needed").text(scoreNeeded);
    $("#total-score").text(totalScore);
    $("#wins-losses").text("Wins: " + wins);
    $("#wins-losses").append("<br />")
    $("#wins-losses").append("Losses: " + losses);
}

//Gets the number of the gem that was clicked and increases the total score by that gem's value.
//User wins if total score matches the score needed and loses if the total score is greater than the score needed.
$("div").on("click", function(e){
    var gemNumber = e.currentTarget.getAttribute('value');
    if (gemNumber >= 1 && gemNumber <= 4){
        totalScore = totalScore + gemArray[gemNumber - 1];
        $("#total-score").text(totalScore);
        if (totalScore === scoreNeeded){
            wins++;
            resetGame();
        }
        if (totalScore > scoreNeeded){
            losses++;
            resetGame();
        }
    }
})
  
/*
$("#gem1").on("click", function(){
    totalScore = totalScore + gem1;
    $("#total-score").text(totalScore);
    if (totalScore === scoreNeeded){
        wins++;
        resetGame();
    }
    if (totalScore > scoreNeeded){
        losses++;
        resetGame();
    }
})
$("#gem2").on("click", function(){
    totalScore = totalScore + gem2;
    $("#total-score").text(totalScore);
    if (totalScore === scoreNeeded){
        wins++;
        resetGame();
    }
    if (totalScore > scoreNeeded){
        losses++;
        resetGame();
    }
})
$("#gem3").on("click", function(){
    totalScore = totalScore + gem3;
    $("#total-score").text(totalScore);
    if (totalScore === scoreNeeded){
        wins++;
        resetGame();
    }
    if (totalScore > scoreNeeded){
        losses++;
        resetGame();
    }
})
$("#gem4").on("click", function(){
    totalScore = totalScore + gem4;
    $("#total-score").text(totalScore);
    if (totalScore === scoreNeeded){
        wins++;
        resetGame();
    }
    if (totalScore > scoreNeeded){
        losses++;
        resetGame();
    }
})
*/