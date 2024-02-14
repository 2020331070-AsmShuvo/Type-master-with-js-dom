
function handleKeyboardKeyupEvent(e){
    // the alphabet pressed
    const pressedKey = e.key;
    // the alphabet should have been pressed
    const curAlphabetElement = document.getElementById('current-alphabet');
    const curAlphabet = curAlphabetElement.innerText;
    expectedAlphabet = curAlphabet.toLowerCase();
    //check matched or not
    if(pressedKey==expectedAlphabet){
        console.log("You got a point!!!");
    }
    else{
        console.log("you missed. You lost a life");
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

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



