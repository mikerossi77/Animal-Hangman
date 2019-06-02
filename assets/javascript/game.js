
var wordsLibrary = [
    "elephant",
    "tiger",
    "bear",
    "zebra",
    "shark",
    "whale"
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

//Game start.  Loop through 12 Guesses
for (var i = 0; i < 12; i++) {

    document.onkeyup = function (event) {

        //Add letterPicked to list of used letters
        var letterPicked = document.createElement('h2');
        letterPicked.textContent = event.key;
        usedLetters.appendChild(letterPicked);

        //Check if letter is in the word
        var currentPick = event.key;
        //loop through letters looking for a match
        lettersInWord.forEach(function (letter, i) {
            if (currentPick == letter) {
                console.log("YOU GOT ONE!")
                //Replace dash with letter
                wordDashes[i] = currentPick;
                // for (var i = 0; i < currentWordInDashes.length; i++){

                // }
                var newWordDashes = "";
                for (var i = 0; i < wordDashes.length; i++) {
                    //var dashesOrLetters = document.getElementById('currentWordDashes');
                    newWordDashes = newWordDashes + wordDashes[i];
                }
                console.log(wordDashes);
                //Update page with new dashesOrLetters
                dashesOrLetters.textContent = newWordDashes;
                currentWordDashes.appendChild(dashesOrLetters);

            }

        });
        //   if (letterPicked = letter) {
        // replace "-" with letter
        //subtract one from lettersRemaining
        //   }
        //}

        // if (userInput == "h") {
        //     alert("Honk!")
        // }
        // else if (userInput == "d") {
        //     car.driveToWork();
        // }
        // else if (userInput == "w") {
        //     car.driveAroundWorld();
        // }
        // else if (userInput == "t") {
        //     car.getTuneUp();
        // }
        // reWriteStats();
    }
}