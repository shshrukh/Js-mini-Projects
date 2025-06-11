// step 3 amking els obj and state obj els obj is manage dom elements and state is for manage states
const els = {};

const state = {
    count : 0
}
// step 2 making inti function 
function init(){
    domCashe();
    bindEvents();
    render();
}

// step 4 filling the els obj using domCashe function 
function domCashe (){
    els.counter = document.getElementById('counter');
    els.increment = document.querySelector('.increment');
    els.decrement = document.querySelector('.decrement');
    els.reset = document.querySelector('.reset');
}

// step 5 adding events on each buttons are triger
function bindEvents (){
    els.increment.addEventListener('click', handleIncrement);
    els.decrement.addEventListener('click', handleDecrenemt);
    els.reset.addEventListener('click', handleReset);
}
 
// if each events are triger perfom action accprding to handle events and render function workes
function render(){
    els.counter.innerText = state.count;
}

function handleIncrement(){
    state.count += 1;
    render();
}
function handleDecrenemt(){
    state.count -= 1;
    render();
}
function handleReset(){
    state.count = 0;
    render()
}

//step 1 when document is loaded init funtion will triger. 

document.addEventListener('DOMContentLoaded',init)