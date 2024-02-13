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
function removeBachgroundColorById(id){
    const elem = document.getElementById(id);
    elem.classList.remove('bg-orange-400');
}