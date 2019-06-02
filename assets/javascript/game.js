var wordsLibrary = [
    "Elephant",
    "Tiger",
    "Bear",
    "Zebra",
    "Shark",
    "Whale"
]
var wordsIndex = 0;
//get next word
currentWord = wordsLibrary[wordsIndex];

//Create dashes to represent the current word
var currentWordInDashes = "";
for (var i = 0; i < currentWord.length; i++) {
    //var dashesOrLetters = document.getElementById('currentWordDashes');
    currentWordInDashes = currentWordInDashes + "-";
}
var dashesOrLetters = document.createElement('p');
dashesOrLetters.textContent = currentWordInDashes;
currentWordDashes.appendChild(dashesOrLetters);

document.onkeyup = function (event) {
    
    var letterPicked = document.createElement('h2');
    letterPicked.textContent = event.key;
    usedLetters.appendChild(letterPicked);


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