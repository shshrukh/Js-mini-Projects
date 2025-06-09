// step--> 3 making els object;
els = {}

const state = {
  currentColor: '#ffffff',
};
//step -->2 {function declaration of inti}

function init(){
    cashDom();
    bindEvents();
}
// step -->4 filling the els object 
function cashDom(){
    els.body = document.body;
    els.colorCode = document.querySelector('.colorCode');
    els.button = document.querySelector('.flipBtn');
}

// step --> 5 adding event listners
function bindEvents(){
    els.button.addEventListener('click', handleColorFlip)
}


function handleColorFlip(){
    state.currentColor = getRandomHexColor();
    renderColor();
}

function renderColor(){
    els.body.style.backgroundColor = state.currentColor;
    els.colorCode.innerText = state.currentColor;
}


function getRandomHexColor(){
    const hex = Math.floor(Math.random()*0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
}

//step-->1    {once the document is loaded we call the init function}//
document.addEventListener('DOMContentLoaded' , init)