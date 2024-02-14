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
        
        // update score:
        const curScoreElem = document.getElementById('current-score');
        const curScoreElemText = curScoreElem.innerText;
        const curScore = parseFloat(curScoreElemText);
        const newScore = curScore+1;
        curScoreElem.innerText=newScore;

        // start new round:
        removeBachgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log("you missed. You lost a life");

        // update score:
        const curLifeElem = document.getElementById('current-life');
        const curLifeElemText = curLifeElem.innerText;
        const curLife = parseFloat(curLifeElemText);
        const newLife = curLife-1;
        curLifeElem.innerText=newLife;
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



