// Create an array of words
var words = ["counterstrike", "overwatch", "destiny", "battlegrounds"]
// Choose word randomly 
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
var underScore = [];
console.log(chosenWord);
var winCount = 0;
var loseCount = 0;
var guessesLeft = 7;
// Create underscores based on length of word
var generatorUnderscore = function () {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
console.log(generatorUnderscore());
// Get users guess
document.addEventListener("keypress", (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    console.log(keyword);
});
var userGuess = function (guessedLetter, word) {
    if (word.indexOf(guessedLetter) > -1) {
        return true
    }
    return false
}
function startGame(){
    chosenWord = words[Math.floor(Math.random() * words.length)];
    underScore = chosenWord.split("") 
}   