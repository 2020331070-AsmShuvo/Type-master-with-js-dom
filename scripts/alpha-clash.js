var wrongKeyPressed = null;

function handleKeyboardKeyupEvent(e){
    // the alphabet pressed
    const pressedKey = e.key;
    // the alphabet should have been pressed
    const curAlphabetElement = document.getElementById('current-alphabet');
    const curAlphabet = curAlphabetElement.innerText;
    
    expectedAlphabet = curAlphabet.toLowerCase();
    

    //check matched or not
    if(pressedKey==expectedAlphabet){
        // console.log("You got a point!!!");
        if(wrongKeyPressed!= null){
            removeBackgroundColorByIdOfWrong(wrongKeyPressed);
            wrongKeyPressed=null;
        }
        console.log(wrongKeyPressed);
        // update score:
        const curScore = getTextElementValueById('current-score')
        const updatedScore = curScore+1;
        setTextElementValueById('current-score', updatedScore);

        // const curScoreElem = document.getElementById('current-score');
        // const curScoreElemText = curScoreElem.innerText;
        // const curScore = parseFloat(curScoreElemText);
        // const newScore = curScore+1;
        // curScoreElem.innerText=newScore;

        // start new round:
        removeBackgroundColorById(expectedAlphabet);
        console.log(wrongKeyPressed);
        
        continueGame();

    }
    else{
        console.log("you missed. You lost a life");

        // update score:
        const curLife = getTextElementValueById('current-life');
        const updatedlife = curLife-1;
        setTextElementValueById('current-life', updatedlife);
        if(updatedlife==0){
            gameOver();
        }
        setBackgroundColorByIdOfWrong(pressedKey);
        wrongKeyPressed = pressedKey;
        console.log(wrongKeyPressed);


        // const curLifeElem = document.getElementById('current-life');
        // const curLifeElemText = curLifeElem.innerText;
        // const curLife = parseFloat(curLifeElemText);
        // const newLife = curLife-1;
        // curLifeElem.innerText=newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
    const alphabet = getRandomAlphabate();
    // change targeted alphabet (jeta screen a dekhasse ba jeta tipte boltese)
    const curAlphabetElement = document.getElementById('current-alphabet');
    curAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementByID('home-screen');
    showElementByID('play-ground');
    hideElementByID('final-score');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementByID('play-ground');
    showElementByID('final-score');

    // update final score:

    // get the final score from final-score window
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabate background:
    const curAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(curAlphabet);

}



