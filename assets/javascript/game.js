
var wordsLibrary = [
    "ELEPHANT",
    "TIGER",
    "BEAR",
    "ZEBRA",
    "SHARK",
    "WHALE"
]


var wordsIndex = 0;
//get next word
currentWord = wordsLibrary[wordsIndex];


//Create dashes to represent the current word
var wordDashes = [];
var currentWordInDashes = "";
var lettersInWord = [];
for (var i = 0; i < currentWord.length; i++) {
    //var dashesOrLetters = document.getElementById('currentWordDashes');
    wordDashes[i] = "-"
    currentWordInDashes = currentWordInDashes + "-";
    lettersInWord.push(currentWord.charAt(i));
    console.log(lettersInWord);
}
var dashesOrLetters = document.createElement('p');
dashesOrLetters.textContent = currentWordInDashes;
currentWordDashes.appendChild(dashesOrLetters);

//Default guesses remaining
var remainingGuessesCount = 7;
var remainingGuesses = document.createElement('h2');
remainingGuesses.textContent = remainingGuessesCount;
remainingGuessesDisplay.appendChild(remainingGuesses);

//Default used Letters
var lettersPicked = document.createElement('h2');
var lettersShown = "";
var allUsedLetters = [];
var alreadyUsedLetter = false;
var letterEntered = "";

//Game start.  Loop through 7 Guesses

console.log("round number" + i);
document.onkeyup = function (event) {

    letterEntered = event.key;
    letterEntered = letterEntered.toUpperCase();
    alreadyUsedLetter = false;
    console.log(letterEntered);
    allUsedLetters.forEach(function (theUsedLetter) {
        if (theUsedLetter == letterEntered) {
            alreadyUsedLetter = true;
        }
    });
    if (alreadyUsedLetter == false) {
        //Add letterPicked to list of used letters
        allUsedLetters.push(letterEntered);
        lettersShown = lettersShown + letterEntered + " ";
        lettersPicked.textContent = lettersShown;
        usedLetters.appendChild(lettersPicked);

        //Check if letter is in the word
        var currentPick = letterEntered;
        //loop through letters looking for a match
        var letterFound = false;
        lettersInWord.forEach(function (letter, i) {
            if (currentPick == letter) {
                //Replace dash with letter
                wordDashes[i] = currentPick;
                letterFound = true;
            }
        });
        //create a newWordDashes variable - loop through wordDashes to set it to the correct values
        if (letterFound) {
            var newWordDashes = "";
            for (var j = 0; j < wordDashes.length; j++) {
                newWordDashes = newWordDashes + wordDashes[j];
            }
            //Update page with new dashesOrLetters
            dashesOrLetters.textContent = newWordDashes;
            currentWordDashes.appendChild(dashesOrLetters);
        }

        // Update remainingGuessesCount and display
        remainingGuessesCount = remainingGuessesCount - 1;
        remainingGuesses.textContent = remainingGuessesCount;
        remainingGuessesDisplay.appendChild(remainingGuesses);
        if (remainingGuessesCount == 0) {

            if (confirm("YOU LOSE!  The word was: " + currentWord + "  Would you like to try again?")) {
                //reset for next game
                //reset use letters
                allUsedLetters = [];
                lettersShown = " ";
                lettersPicked.textContent = lettersShown;
                usedLetters.appendChild(lettersPicked);
                //reset Current Word
                wordsIndex++;
                currentWord = wordsLibrary[wordsIndex];

            }
            else {
                alert("Don't go away mad, just go away!")
            }
        }


    }
}

