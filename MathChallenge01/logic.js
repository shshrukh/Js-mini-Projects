const els ={};
let currentQuestion = null;
const state = {
  currentQuestionNumber: 0,
  totalQuestions: 10,
  score: 0,
  isPlaying: false,
  currentAnswer: '',
  timer: 10,
  intervalId: null,
};

function init (){
    console.log('Math game starting');
    casheDom();
    // console.log(els);
    bindEvents();
    
}

function casheDom (){
    els.landing    = document.querySelector('.gameContainer');
    els.startBtn   = document.querySelector('.startBtnReal');
    els.gamePage   = document.querySelector('.startGame');
    els.question   = document.querySelector('.genClass');
    els.answerBox  = document.querySelector('.ansbox');
    els.submitBtn  = document.querySelector('.submitAns');
    els.timer      = document.querySelector('.coutTime');
}


function bindEvents() {
  els.startBtn.addEventListener('click', handleStartClick);
  els.answerBox.addEventListener('keyup', handleAnswerTyping);
  els.submitBtn.addEventListener('click', handleSubmitClick);
}
function handleStartClick() {
    state.currentQuestionNumber = 1;
    state.score = 0;
    state.isPlaying = true;

    els.landing.style.display = 'none';
    els.gamePage.style.display = 'block';

    currentQuestion = generateQuestion();
    renderQuestion(currentQuestion);
}

function handleAnswerTyping(e) {
   state.currentAnswer = e.target.value;
  console.log('User typing:', state.currentAnswer);
}

function handleSubmitClick() {
   const correct = parseInt(state.currentAnswer) === currentQuestion.answer;
  startTimer();
  if (correct) {
    state.score++;
    console.log('✅ Correct!');
  } else {
    console.log('❌ Incorrect!');
  }

  nextQuestionOrEnd();
}
function nextQuestionOrEnd() {
  if (state.currentQuestionNumber >= state.totalQuestions) {
    endGame();
    return;
  }

  state.currentQuestionNumber++;
  state.currentAnswer = '';
  els.answerBox.value = '';

  currentQuestion = generateQuestion();
  renderQuestion(currentQuestion);
  clearInterval(state.intervalId); // clear previous timer
//   startTimer();
}
function endGame() {
  state.isPlaying = false;
  alert(`Game over! Your score: ${state.score}/${state.totalQuestions}`);
}

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 9 + 1);
  const num2 = Math.floor(Math.random() * 9 + 1);
  return {
    text: `${num1} + ${num2} = ?`,
    answer: num1 + num2,
  };
}

function renderQuestion(q) {
  els.question.innerText = q.text;
}

function startTimer() {
  state.timer = 10;
  updateTimerUI();

  state.intervalId = setInterval(() => {
    state.timer--;
    updateTimerUI();

    if (state.timer <= 0) {
      clearInterval(state.intervalId);
      handleSubmitClick(); // auto-submit
    }
  }, 1000);
}

function updateTimerUI() {
  els.timer.innerText = state.timer < 10 ? '0' + state.timer : state.timer;
}




document.addEventListener('DOMContentLoaded',init);
