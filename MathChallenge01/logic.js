function landingPageBtn(){
    const startGame = document.querySelector('.startGame');
    const startBtn = document.querySelector('.startBtnReal');
    const landingPage = document.querySelector('.gameContainer');
    startBtn.addEventListener('click',()=>{
        landingPage.style.display = 'none';
        startGame.style.display = 'block';

    })
    
}

// generate random Number//
function randomNumbers(){
    const number = Math.floor(Math.random()*10);
    return number
}
//showing the number in box
function generateQuestion(){
    const genQuestion = document.querySelector('.genClass');
    const numOne = randomNumbers();
    const numTow = randomNumbers();
    genQuestion.innerText = `${numOne} + ${numTow} = ?`

}


landingPageBtn();
generateQuestion();