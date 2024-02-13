function hideElementByID(id){
    const elem = document.getElementById(id);
    elem.classList.add('hidden');
}

function showElementByID(id){
    const elem = document.getElementById(id);
    elem.classList.remove('hidden');
}