// Going to define some variables to start at 0. 

// Number of wins to start:
var wins = 0;
// number of losses to start:
var losses = 0;
// number of guesses left to start. I want a 9 to show.:
var guessesLeft = 9;
//   There is definitely a better way to set up this array, but in the interest of not adding more headache, I'm just going to write it all out. 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Need a variable to push the user submission to an array. 
var lettersGuessed = []

//Need to create variables that hold references to the places in the HTML where we want to display things. 

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// This particular var isn't currently doing anything. I need to define "guessesLeftText"
var guessesLeftText = document.getElementById("guessesLeft-text");
var userChoiceText = document.getElementById("guessesSoFar-text");

// This is to have the display amount of guesses left to 9: 
guessesLeftText.textContent = guessesLeft;
// winsText.textContent = wins;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Now I need to randomly choose a choice from the 26 letter options array. Still in the same function of user pressing a key. But how do I get the random choice to survive 
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//   This a global function attempting to reset the game given certain conditions. I can use it later on. 
function reset() {
    // New variable. computerguess = random letter a-z. 
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//    Lets console.log to make sure it work. 
   console.log("Computer guess on Reset: " + computerGuess);
//    Now I need to say that letters guessed equals empty, because I want the letters Guessed section to reset when losses goes up by 1 (and guesses are out.)
   lettersGuessed = [];
//    And reset the guesses left to 9 on reset as well. 
   guessesLeft = 9;
}

//This function is run whenever the user presses a key
document.onkeyup = function (event) {
    // This is defining the object userText as the result of the above function + key
    var userGuess = event.key;

    //going to console.log computerGuess and userGuess to make sure they are recording (before I assign them to spans).
    console.log("Computer guess on keyup: " + computerGuess);
    console.log("User guess on key: " + userGuess);

    //both working properly. 

    //Now I need to apply the if/then logic to determine the outcome of the game. 

    //Let's start with the easy one. If the guesses are the same, wins increases by one. 
    // if the computer guess equals the userguess
    if (userGuess === computerGuess) {
        // then we increase wins. 
        wins++;
        // AND the computer guesses again, which we address with the reset function. 
        // computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // AND we reset guesses left to 9. 
        guessesLeft = 9;
        reset();
    }
    // Now I need to account for all other variables. Luckily, anything that doesn't equal computerGuess results in an incorrect guess. So I need two outcomes: 1. GuessesLeft decreases by 1, and 2. When GuessesLeft =0, then losses = +1. 
    else {
        guessesLeft--;
        // HOW DO I GET THE BELOW FUNCTION TO WORK?
        lettersGuessed.push(userGuess);
        // So within the else statement, I have another if variable, which performs multiple things. 
        // If guesses left drops below 1, then
        if (guessesLeft < 1) {
            // losses goes up by one. 
            losses++;
            // and guesses left goes back to 9.
            // guessesLeft = 9;
            reset();
            // and the computer makes a new guess. 
            // computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            // AND the letter being displayed under "youre guesses" is reset. 
            lettersGuessed.textContent = (" ");
        }
    }
    //Displays the wins applying:
    winsText.textContent = wins;
    // Displays the guesses applying, starting with 9:
    guessesLeftText.textContent = guessesLeft;

    // Now I need to have make a way for losses to increase by 1 if guesses left reaches 0. 
    lossesText.textContent = losses;

    // I also need to display the user's guess. I'll do that using userText. 
    userChoiceText.textContent = lettersGuessed.join(",");

    // BUT I need these to list up until 9 guesses, rather than resubmitting a number each time. 

}
