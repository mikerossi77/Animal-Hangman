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
var guessesAllowed = 7;
var wordsIndex = 0;
//get next word

currentWord = wordsLibrary[wordsIndex];
currentWord = currentWord.toUpperCase();

//Initiate and display Win and loss counting
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
var dashesOrLetters = document.createElement('h1');
dashesOrLetters.textContent = currentWordInDashes;
currentWordDashes.appendChild(dashesOrLetters);

//Default and display guesses remaining
var remainingGuessesCount = guessesAllowed;
var remainingGuesses = document.createElement('h2');
remainingGuesses.textContent = remainingGuessesCount;
remainingGuessesDisplay.appendChild(remainingGuesses);

//Initialize used Letters
var lettersPicked = document.createElement('h2');
var lettersShown = "";
var allUsedLetters = [];
var alreadyUsedLetter = false;
var letterEntered = "";

//Hide Play Again button
playAgain.style.display = 'none';

//Game start.  Loop through Guesses Allowed ==============================================
document.onkeyup = function (event) {

    //Initialize letter variables
    letterEntered = event.key;
    letterEntered = letterEntered.toUpperCase();

    processLetter(letterEntered);
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
    remainingGuessesCount = guessesAllowed;
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
    //reset Image
    document.getElementById("hangmanPic").src = "./assets/images/hangman0.gif";
    document.getElementById("animals").src = "https://cdn.unifiedcommerce.com/content/product/large/55113-2.jpg";
    //Hide Play Again button
    playAgain.style.display = 'none';
}
function letterClick(letter) {
    processLetter(letter);
}

function processLetter(letterEntered) {
    alreadyUsedLetter = false;

    //Check if letter has already been used
    allUsedLetters.forEach(function (theUsedLetter) {
        if (theUsedLetter == letterEntered) {
            alreadyUsedLetter = true;
        }
    });

    //If letter has not already been used then process letter
    if (alreadyUsedLetter == true) {
        alert("You already tried that letter");
    }
    else {
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
            //Update Image
            //var myImage = document.getElementById("hangmanPic");
            //myImage.src = "./assets/images/hangman0.gif"
            if (remainingGuessesCount == 6) {
                document.getElementById("hangmanPic").src = "./assets/images/Hangman1.png";
            }
            else if (remainingGuessesCount == 5) {
                document.getElementById("hangmanPic").src = "./assets/images/Hangman2.png";
            }
            else if (remainingGuessesCount == 4) {
                document.getElementById("hangmanPic").src = "./assets/images/Hangman3.png";
            }
            else if (remainingGuessesCount == 3) {
                document.getElementById("hangmanPic").src = "./assets/images/Hangman4.png";
            }
            else if (remainingGuessesCount == 2) {
                document.getElementById("hangmanPic").src = "./assets/images/Hangman5.png";
            }
            else {
                document.getElementById("hangmanPic").src = "./assets/images/Hangman6.png";
            }

        }

        // Check to see if game is over
        // Did player win?
        if (letterCorrect == letterCount) {
            //alert("YOU WIN!")
            winCount++;
            winCountDisplay.textContent = winCount;
            wins.appendChild(winCountDisplay);
            if (currentWord == "ELEPHANT") {
                document.getElementById("animals").src = "https://www.disktrend.com/wp-content/uploads/2016/11/baby-elephant-playing-600x450.jpg";
                var x = document.getElementById("elephantAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://pics.me.me/nice-job-ly-really-proud-of-you-thanks-doge-41249049.png";
            }
            else if (currentWord == "BEAR") {
                document.getElementById("animals").src = "https://gonzobanker.com/wp-content/uploads//7-Rules-When-Bankers-Face-the-Bear.jpg";
                var x = document.getElementById("bearAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://www.joshuanhook.com/wp-content/uploads/2015/06/21979956.jpg";
            }
            else if (currentWord == "TIGER") {
                document.getElementById("animals").src = "https://media.graytvinc.com/images/810*456/10505533_xl.jpg";
                var x = document.getElementById("tigerAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmPYbR1nOc3wml7aOjjMSQ-mh-uHBYgnC2MyRYs1Ldwb41_zH";
            }
            else if (currentWord == "SHARK") {
                document.getElementById("animals").src = "https://static.euronews.com/articles/stories/03/59/62/82/880x495_cmsv2_e9f51987-8a8b-5a65-9298-7bce4ad218af-3596282.jpg";
                var x = document.getElementById("sharkAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://memegenerator.net/img/instances/75228119.jpg";
            }
            else if (currentWord == "ZEBRA") {
                document.getElementById("animals").src = "https://timedotcom.files.wordpress.com/2014/07/zebra-new-red-meat.jpg";
                var x = document.getElementById("zebraAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://img.freepik.com/free-vector/congratulations-typography-handwritten-lettering-greeting-card-banner_7081-766.jpg?size=626&ext=jpg";
            }
            else if (currentWord == "WHALE") {
                document.getElementById("animals").src = "https://www.mercurynews.com/wp-content/uploads/2018/09/SJM-L-WHALEKAYAK-0930-02.jpg?w=620";
                var x = document.getElementById("whaleAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://previews.123rf.com/images/aliasching/aliasching1604/aliasching160400600/56253022-way-to-go.jpg";
            }
            else if (currentWord == "CHEATAH") {
                document.getElementById("animals").src = "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/cheetah_16x9.jpg?itok=bNuhAOvq";
                var x = document.getElementById("cheetahAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://us.123rf.com/450wm/alextanya123rf/alextanya123rf1712/alextanya123rf171200011/91047109-stock-vector-you-are-the-best-text-typography-for-card-poster-invitation-or-t-shirt-lettering-design-vibrant-colo.jpg?ver=6";
            }
            else {
                var x = document.getElementById("jungleAudio"); 
                x.play();
                document.getElementById("hangmanPic").src = "https://memegenerator.net/img/instances/76497037.jpg";
            }
            
            playAgain.style.display = 'block';

        }
        //Did player lose
        else if (remainingGuessesCount == 0) {
            //Udate losses
            lossCount++
            lossCountDisplay.textContent = lossCount;
            losses.appendChild(lossCountDisplay);
            document.getElementById("hangmanPic").src = "https://cdn.dribbble.com/users/139200/screenshots/1050338/sorry.gif";
            playAgain.style.display = 'block';
            //Show the answer
            dashesOrLetters.textContent = currentWord;
            currentWordDashes.appendChild(dashesOrLetters);
        }


    }
}

