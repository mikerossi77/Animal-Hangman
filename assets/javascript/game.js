
var wordsLibrary = [
    {
        name: "ELEPHANT",
        hint: "Really big ears",
        wellDoneURL: "https://pics.me.me/nice-job-ly-really-proud-of-you-thanks-doge-41249049.png",
        picURL: "https://www.disktrend.com/wp-content/uploads/2016/11/baby-elephant-playing-600x450.jpg"
    },
    // "TIGER",
    {
        name: "TIGER",
        hint: "Striped",
        wellDoneURL: "https://media.graytvinc.com/images/810*456/10505533_xl.jpg",
        picURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmPYbR1nOc3wml7aOjjMSQ-mh-uHBYgnC2MyRYs1Ldwb41_zH"
    },

    // "BEAR",
    {
        name: "BEAR",
        hint: "Grizzly",
        wellDoneURL: "https://www.joshuanhook.com/wp-content/uploads/2015/06/21979956.jpg",
        picURL: "https://gonzobanker.com/wp-content/uploads//7-Rules-When-Bankers-Face-the-Bear.jpg"
    },
    // "ZEBRA",
    {
        name: "ZEBRA",
        hint: "Black and White",
        wellDoneURL: "https://img.freepik.com/free-vector/congratulations-typography-handwritten-lettering-greeting-card-banner_7081-766.jpg?size=626&ext=jpg",
        picURL: "https://timedotcom.files.wordpress.com/2014/07/zebra-new-red-meat.jpg"
    },
    // "SHARK",
    {
        name: "SHARK",
        hint: "Eats Fish",
        wellDoneURL: "https://memegenerator.net/img/instances/75228119.jpg",
        picURL: "https://static.euronews.com/articles/stories/03/59/62/82/880x495_cmsv2_e9f51987-8a8b-5a65-9298-7bce4ad218af-3596282.jpg"
    },
    // "WHALE",
    {
        name: "WHALE",
        hint: "Really big swimmer",
        wellDoneURL: "https://previews.123rf.com/images/aliasching/aliasching1604/aliasching160400600/56253022-way-to-go.jpg",
        picURL: "https://www.mercurynews.com/wp-content/uploads/2018/09/SJM-L-WHALEKAYAK-0930-02.jpg?w=620"
    },
    // "CHEATAH"
    {
        name: "CHEATAH",
        hint: "FAST!",
        wellDoneURL: "https://us.123rf.com/450wm/alextanya123rf/alextanya123rf1712/alextanya123rf171200011/91047109-stock-vector-you-are-the-best-text-typography-for-card-poster-invitation-or-t-shirt-lettering-design-vibrant-colo.jpg?ver=6",
        picURL: "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/cheetah_16x9.jpg?itok=bNuhAOvq"
    },
    // "EAGLE",
    {
        name: "EAGLE",
        hint: "Soar like an...",
        wellDoneURL: "https://media.graytvinc.com/images/810*456/10505533_xl.jpg",
        picURL: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/10/04/08/gettyimages-530777824.gif"
    },
    // "GIRRAFE",
    {
        name: "GIRRAFE",
        hint: "Long Neck",
        wellDoneURL: "https://memegenerator.net/img/instances/75228119.jpg",
        picURL: "https://www.thoughtco.com/thmb/a6keu_lfmRjyDH-72nIz9MW5EdA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-872346454-5c37b2dec9e77c000132a628.jpg"
    },
    // "RABBIT",
    {
        name: "RABBIT",
        hint: "Small, White, and Fluffy",
        wellDoneURL: "https://previews.123rf.com/images/aliasching/aliasching1604/aliasching160400600/56253022-way-to-go.jpg",
        picURL: "https://timedotcom.files.wordpress.com/2019/03/us-movie-rabbits-meaning.jpg"
    },
    // "COYOTE",
    {
        name: "COYOTE",
        hint: "Looks like a wolf",
        wellDoneURL: "https://previews.123rf.com/images/aliasching/aliasching1604/aliasching160400600/56253022-way-to-go.jpg",
        picURL: "https://postnewsgroup.com/wp-content/uploads/2019/02/coyote-.jpg"
    },
    // "SNAKE",
    {
        name: "SNAKE",
        hint: "Slithers",
        wellDoneURL: "https://previews.123rf.com/images/aliasching/aliasching1604/aliasching160400600/56253022-way-to-go.jpg",
        picURL: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/snakebites_what_you_need_to_know_slideshow/493ss_getty_rf_alert_grass_snake.jpg"
    },
    // "LION",
    {
        name: "LION",
        hint: "King of the Jungle",
        wellDoneURL: "https://memegenerator.net/img/instances/75228119.jpg",
        picURL: "https://timedotcom.files.wordpress.com/2018/12/lion-conservators-center.jpg?quality=85"
    },
]



//randomize wordsLibrary
shuffle(wordsLibrary);

var guessesAllowed = 7;
var wordsIndex = 0;
var alreadyHinted = false;
//get next word

var currentWord = wordsLibrary[wordsIndex].name;
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

//Game run on Keyboard ckicl
document.onkeyup = function (event) {

    //Initialize letter variables
    letterEntered = event.key;
    letterEntered = letterEntered.toUpperCase();
    processLetter(letterEntered);
}

//Game run on tap button
function letterClick(letter) {
    processLetter(letter);
}

function resetGame() {
    //reset use letters
    allUsedLetters = [];
    lettersShown = " ";
    lettersPicked.textContent = lettersShown;
    usedLetters.appendChild(lettersPicked);
    alreadyHinted = false;
    //reset Current Word
    wordsIndex++;
    currentWord = wordsLibrary[wordsIndex].name;
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

function processLetter(letterEntered) {
    alreadyUsedLetter = false;
    //Get array index
    var currentAnimalIndex = searchForIndex(currentWord, wordsLibrary);

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
            //Update Image
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
        //Give a hint
        if (remainingGuessesCount == 2 && alreadyHinted == false) {
            if (confirm("Would you like a hint?") == true) {
                alert(wordsLibrary[currentAnimalIndex].hint);
                alreadyHinted = true;
            }


        }
        if (remainingGuessesCount == 1 && alreadyHinted == false) {
            if (confirm("Now, would you like a hint?") == true) {
                alert(wordsLibrary[currentAnimalIndex].hint);
                alreadyHinted = true;
            }

        }


        // Check to see if game is over
        // Did player win?
        if (letterCorrect == letterCount) {
            //alert("YOU WIN!")
            winCount++;
            winCountDisplay.textContent = winCount;
            wins.appendChild(winCountDisplay);


            //Generic code for winning.  set Animals picture, Play Audio, set hangman nice job picture
            //Play audio
            var audioId = currentWord + "Audio";
            var x = document.getElementById(audioId);
            x.play();

            //set pictures
            document.getElementById("hangmanPic").src = wordsLibrary[currentAnimalIndex].wellDoneURL;
            document.getElementById("animals").src = wordsLibrary[currentAnimalIndex].picURL;
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
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

function shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};
function searchForIndex(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return i;
        }
    }
}

