//function play(){
// const homescreen = document.getElementById('home-screen');
// homescreen.classList.add('hidden');
 //const palyground = document.getElementById('play-ground');
 //palyground.classList.remove('hidden');
//}
//keyboard event handler section
function handleKeyBoardButtonPress(event){
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log( playerPressed,expectedAlphabet );

    // check the player click right applphabet section
    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        // updated score step
        // step 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        // step 2. increase the score by 1
        const newScore = currentScore + 1;
        // step 3. show updated score
        currentScoreElement.innerText = newScore;

       // start play with new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        console.log('You loss your life');
        //start for life times
        // step 1. get the current life
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step 2. Reduce the life time
        const newLife = currentLife - 1;
        // step 3. updated the life time
        currentLifeElement.innerText = newLife;

    }

}
document.addEventListener('keyup', handleKeyBoardButtonPress)
//.... keyboard event handler part close....//
function continueGame(){
    const alphabet = getARandomAlphabet();
   // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    addBackgroundColor(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}