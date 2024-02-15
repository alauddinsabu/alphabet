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


function getARandomAlphabet(){
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetstring.split('');
    console.log(alphabet);

    const randomNumber = Math.random() *25;
    const index = Math.round(randomNumber);
   
 const alphabets = alphabet[index];
    
    return alphabets
}