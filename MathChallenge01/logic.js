function landingPageBtn(){
    const startGame = document.querySelector('.startGame');
    const startBtn = document.querySelector('.startBtnReal');
    const landingPage = document.querySelector('.gameContainer');
    startBtn.addEventListener('click',()=>{
        landingPage.style.display = 'none';
        startGame.style.display = 'block';

    })
    
}



landingPageBtn();