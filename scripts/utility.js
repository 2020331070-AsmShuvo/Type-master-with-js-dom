function hideElementByID(id){
    const elem = document.getElementById(id);
    elem.classList.add('hidden');
}

function showElementByID(id){
    const elem = document.getElementById(id);
    elem.classList.remove('hidden');
}

function getRandomAlphabate(){
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabatesArray = alphabateString.split('');
    const index = getRandomIndex();
    const randomAlphabate = alphabatesArray[index];

    return randomAlphabate;
    
}

function getRandomIndex(){
    const index = Math.floor(Math.random() *25);
    return index;
}

function setBackgroundColorById(id){
    const elem = document.getElementById(id);
    elem.classList.add('bg-orange-400');
}
function setBackgroundColorByIdOfWrong(id){
    const elem = document.getElementById(id);
    elem.classList.add('bg-red-400');
}
function removeBackgroundColorById(id){
    const elem = document.getElementById(id);
    elem.classList.remove('bg-orange-400');
}
function removeBackgroundColorByIdOfWrong(id){
    const elem = document.getElementById(id);
    elem.classList.remove('bg-red-400');
}

function getTextElementValueById(id){
    const elem = document.getElementById(id);
    const elemTxt = elem.innerText;
    const val = parseFloat(elemTxt);
    return val;
}
function setTextElementValueById(id, val){
    const elem = document.getElementById(id);
    elem.innerText=val;
}

function getElementTextById(id){
    const elem = document.getElementById(id);
    const text = elem.innerText;
    return text;
}