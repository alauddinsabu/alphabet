function hideElementById(elementId){
    const elements = document.getElementById(elementId);
    elements.classList.add('hidden');
}

function showElementById(elementId){
    const elements = document.getElementById(elementId);
    elements.classList.remove('hidden');
}

function addBackgroundColor(elementId){
   const elements = document.getElementById(elementId);
   elements.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
    
}

function getARandomAlphabet(){
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetstring.split('');
    //console.log(alphabet);

    const randomNumber = Math.random() *25;
    const index = Math.round(randomNumber);
   
 const alphabets = alphabet[index];
    
    return alphabets
}