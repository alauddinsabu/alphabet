//function play(){
// const homescreen = document.getElementById('home-screen');
// homescreen.classList.add('hidden');
 //const palyground = document.getElementById('play-ground');
 //palyground.classList.remove('hidden');
//}
//keyboard event handler section
function handleKeyBoardButtonPress(event){
    const playerPressed = event.key;
    console.log('palyer pressed', playerPressed);
   // console.log('Player pressed', playerPressed);
   // step for game stop
   if(playerPressed === 'Escape'){
    gameOver();
   }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log( playerPressed,expectedAlphabet );

    // check the player click right applphabet section
    if(playerPressed === expectedAlphabet){
       
       const currentScore1 = getTextElementValueById('current-score');
       console.log(currentScore1);
       const updatedScore = currentScore1 + 1;
       setTextElementValueById('current-score', updatedScore);
      
      
       // ..............................................
        // updated score step
        // step 1. get the current score
        //const currentScoreElement = document.getElementById('current-score');
        //const currentScoreText = currentScoreElement.innerText;
        //const currentScore = parseInt(currentScoreText);
        //console.log(currentScore);
        // step 2. increase the score by 1
        // const newScore = currentScore + 1;
        // step 3. show updated score
        //currentScoreElement.innerText = newScore;

       // start play with new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        console.log('You loss your life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        
        
        
        if (updatedLife ===0){
            gameOver();
        }
        
        //start for life times
        // step 1. get the current life
        //const currentLifeElement = document.getElementById('current-life');
        //const currentLifeText = currentLifeElement.innerText;
       // const currentLife = parseInt(currentLifeText);
       // // step 2. Reduce the life time
        //const newLife = currentLife - 1;
       // // step 3. updated the life time
       // currentLifeElement.innerText = newLife;

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
    //function for hide homeground and final score, show only play ground 
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // function for reset score and life.
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    //step 1. get the final score
    lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    //console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}