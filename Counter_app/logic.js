// step 3 amking els obj and state obj els obj is manage dom elements and state is for manage states
els = {};

state = {
    count : 0
}
// step 2 making inti function 
function init(){
    domCashe();
    bindEvents();
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
 
// if each events are triger perfom action accprding to handle events

function handleIncrement(){
    state.count += 1;
    els.counter.innerText = state.count;
}
function handleDecrenemt(){
    state.count -= 1;
    els.counter.innerText = state.count;
}
function handleReset(){
    state.count = 0;
    els.counter.innerText = state.count;
}

//step 1 when document is loaded init funtion will triger. 

document.addEventListener('DOMContentLoaded',init)