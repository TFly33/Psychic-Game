// Going to define some variables to start at 0. 
var wins = 0;
var losses = 0;
//   There is definitely a better way to set up this array, but in the interest of not adding more headache, I'm just going to write it all out. 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Need to create variables that hold references to the places in the HTML where we want to display things. 

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
// This particular var isn't currently doing anything. I need to define "guessesLeftText"
var guessesLeftText = document.getElementById("guessesLeft-text");
var userText = document.getElementById("guessesSoFar-text");


//This function is run whenever the user presses a key
document.onkeyup = function (event) {
    // This is defining the object userText as the result of the above function + key
   var userGuess = event.key;

    // Now I need to randomly choose a choice from the 26 letter options array. Still in the same function of user pressing a key. 
var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];

//going to console.log computerGuess and userGuess to make sure they are recording (before I assign them to spans).
console.log (computerGuess);
console.log (userGuess);

//both working properly. 

//Now I need to apply the if/then logic to determine the outcome of the game. 

//Let's start with the easy one. If the guesses are the same, wins increases by one. 
if (userGuess === computerGuess) 
{
    wins++;
}

winsText.textContent = wins;
}
// Displaying the wins applying: 

// Displaying the wins applying: 
