//get next word from word list
define array of words in code

loop through wordsArray
wordsArray.forEach(currentWord) {
    // Game logic

    // Create Array with all letters.  loop through word setting each letter to a spot in the Array
    for i=0, i < currentWord.length, i++ {
        set lettersInWord[i] = currentWord.charAt(0);
        //forEach letter in the array add "-" to the Current Word display
    }

    //Get letter from user
    document.onkeyup = function (event) {
        var letterPicked = event.key;
         
        var letterPicked = document.createElement('h2');
        letterPicked.textContent = event.key;

        //add letterPicked to list of picked leters
        usedLetters.appendChild(letterPicked);

        //Check if letter is in the word
        lettersInWord.forEach(letter, i) {
            if (letterPicked = letter) {
                // replace "-" with letter
                subtract one from lettersRemaining
            }
        }
        subtract one from guessesRemaining
        //Check for winner
        if (letterRamaining = 0)
            //WINNER!
    }




}



}
    









// create underscores for every letter in the word
