
var wordsLibrary = [
    "ELEPHANT",
    "TIGER",
    "BEAR",
    "ZEBRA",
    "SHARK",
    "WHALE",
    "CHEATAH",
    "PEACOCK",
    "EAGLE",
    "GIRRAFE",
    "RABBIT",
    "COYOTE",
    "SQUIRREL",
    "SNAKE",
    "REINDEER",
    "GAZELLE",
    "LION",
]


var wordsIndex = 0;
//get next word
currentWord = wordsLibrary[wordsIndex];

//Initiate and display Win and loss counts
var winCount = 0;
var lossCount = 0
// wins
var winCountDisplay = document.createElement('h2');
winCountDisplay.textContent = winCount;
wins.appendChild(winCountDisplay);
//losses
var lossCountDisplay = document.createElement('h2');
lossCountDisplay.textContent = lossCount;
losses.appendChild(lossCountDisplay);

//Initialize a bunch of varables
var wordDashes = [];
var currentWordInDashes = "";
var lettersInWord = [];
var letterCount = currentWord.length;
var letterCorrect = 0

//Initialize dashes to number of letters in currentWord
for (var i = 0; i < currentWord.length; i++) {
    wordDashes[i] = "-"
    currentWordInDashes = currentWordInDashes + "-";
    lettersInWord.push(currentWord.charAt(i));
}
//Display initialized dashes
var dashesOrLetters = document.createElement('p');
dashesOrLetters.textContent = currentWordInDashes;
currentWordDashes.appendChild(dashesOrLetters);

//Default and display guesses remaining
var remainingGuessesCount = 7;
var remainingGuesses = document.createElement('h2');
remainingGuesses.textContent = remainingGuessesCount;
remainingGuessesDisplay.appendChild(remainingGuesses);

//Initialize used Letters
var lettersPicked = document.createElement('h2');
var lettersShown = "";
var allUsedLetters = [];
var alreadyUsedLetter = false;
var letterEntered = "";

//Game start.  Loop through 7 Guesses
document.onkeyup = function (event) {

    //Initialize letter variables
    letterEntered = event.key;
    letterEntered = letterEntered.toUpperCase();
    alreadyUsedLetter = false;

    //Check if letter has already been used
    allUsedLetters.forEach(function (theUsedLetter) {
        if (theUsedLetter == letterEntered) {
            alreadyUsedLetter = true;
        }
    });

    //If letter has not already been used then process letter
    if (alreadyUsedLetter == false) {
        //Add letterPicked to list of used letters
        allUsedLetters.push(letterEntered);
        lettersShown = lettersShown + letterEntered + " ";
        lettersPicked.textContent = lettersShown;
        usedLetters.appendChild(lettersPicked);

        //Check if letter is in the word by looping through letters looking for a match
        var currentPick = letterEntered;
        var letterFound = false;
        lettersInWord.forEach(function (letter, i) {
            if (currentPick == letter) {
                //Replace dash with letter
                wordDashes[i] = currentPick;
                letterCorrect++
                letterFound = true;
            }
        });
        //If letter found in word then create a newWordDashes variable - loop through wordDashes to set it to the correct values
        if (letterFound) {

            var newWordDashes = "";
            for (var j = 0; j < wordDashes.length; j++) {
                newWordDashes = newWordDashes + wordDashes[j];
            }
            //Update page with new dashesOrLetters
            dashesOrLetters.textContent = newWordDashes;
            currentWordDashes.appendChild(dashesOrLetters);
        }
        else {
            // Update remainingGuessesCount and display
            remainingGuessesCount = remainingGuessesCount - 1;
            remainingGuesses.textContent = remainingGuessesCount;
            remainingGuessesDisplay.appendChild(remainingGuesses);
        }

        // Check to see if game is over
        // Did player win?
        if (letterCorrect == letterCount) {
            alert("YOU WIN!")
            winCount++;
            winCountDisplay.textContent = winCount;
            wins.appendChild(winCountDisplay);
            resetGame();
        }
        //Did player lose
        else if (remainingGuessesCount == 0) {

            if (confirm("YOU LOSE!  The word was: " + currentWord + "  Would you like to try again?")) {

                //Udate losses
                lossCount++
                lossCountDisplay.textContent = lossCount;
                losses.appendChild(lossCountDisplay);
                resetGame();
            }
            else {
                alert("Don't go away mad, just go away!")
                resetGame();
            }
        }


    }
}

function resetGame() {
    //reset use letters
    allUsedLetters = [];
    lettersShown = " ";
    lettersPicked.textContent = lettersShown;
    usedLetters.appendChild(lettersPicked);
    //reset Current Word
    wordsIndex++;
    currentWord = wordsLibrary[wordsIndex];
    letterCount = currentWord.length;
    //reset remainingGuesses
    remainingGuessesCount = 7
    remainingGuesses.textContent = remainingGuessesCount;
    remainingGuessesDisplay.appendChild(remainingGuesses);
    //reset Current Word dashes
    wordDashes = [];
    currentWordInDashes = "";
    lettersInWord = [];
    for (var i = 0; i < currentWord.length; i++) {
        //var dashesOrLetters = document.getElementById('currentWordDashes');
        wordDashes[i] = "-"
        currentWordInDashes = currentWordInDashes + "-";
        lettersInWord.push(currentWord.charAt(i));
    }
    dashesOrLetters.textContent = currentWordInDashes;
    currentWordDashes.appendChild(dashesOrLetters);

    letterCorrect = 0;

}

