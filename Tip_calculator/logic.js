const els = {};
const state = {
    bill : 0,
    tip : 0,
    people : 0
};

function init(){
    casheDom(); 
    bindEvents()
}
function casheDom (){
    els.bill = document.getElementById('bill');
    els.tip = document.getElementById('tip');
    els.people = document.getElementById('people');
    els.result = document.querySelector('.result');
    els.calcutateBtn = document.querySelector('.calculate');
    els.inputs = document.querySelectorAll('input');
}



function bindEvents(){
    els.bill.addEventListener('keyup', handleAnswerTyping);

}

function handleAnswerTyping(e){
    state.bill = e.target.value;
    console.log('user typing', state.bill);
    
}



document.addEventListener('DOMContentLoaded', init);