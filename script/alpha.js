//function play(){
// const homescreen = document.getElementById('home-screen');
// homescreen.classList.add('hidden');
 //const palyground = document.getElementById('play-ground');
 //palyground.classList.remove('hidden');
//}

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    addBackgroundColor(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}