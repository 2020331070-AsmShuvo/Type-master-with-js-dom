function continueGame(){
    const alphabet = getRandomAlphabate();
    // change icon alphabet
    const curAlphabetElement = document.getElementById('current-alphabet');
    curAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
    continueGame();

}


