const els = {};
const state = {
    bill : 0,
    tip : 0,
    people : 0, 
    Text : ''
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
    els.calculateBtn = document.querySelector('.calculate');
    els.inputs = document.querySelectorAll('input');
    els.recalculate = document.querySelector('.re-calculate')
}



function bindEvents(){
    const inputArray = Array.from(els.inputs);
    inputArray.forEach((iteams)=>{
        iteams.addEventListener('keyup',handleAnswerTyping)
    });

    els.calculateBtn.addEventListener('click', handleCalculation);
    els.recalculate.addEventListener('click', reset);


}

function handleAnswerTyping(e){
    const storeIdValue = e.target.id;
    if(storeIdValue === 'bill'){
        state.bill = parseFloat(e.target.value) || 0;
        console.log('user is typing', state.bill);
        
    }else if(storeIdValue === 'tip'){
        state.tip = parseFloat(e.target.value) || 0;
        console.log('user is typing', state.tip);
    }else{
        state.people = parseFloat(e.target.value) || 0;
        console.log('user is typing', state.people);
    }
    
}
function handleCalculation(){
    const {bill,tip, people} = state;
    if(!bill || !tip || !people){
        alert('please enter the bill, tip % , and number of people');
        return undefined;
    }
    if(people <= 1){
        alert('Number of people must be at least 2')
        return undefined;
    }
    
    const tipAmount = +(bill * tip / 100).toFixed(2);
    const totalAmount = +(bill + tipAmount).toFixed(2);
    // console.log('total amount is ',totalAmount);
    
    const eachPersonPay = +(totalAmount / people).toFixed(2);
    state.Text = `your bill is ${bill}$ and tip is ${tipAmount}$ tota amount is ${totalAmount}$ and each person pay ${eachPersonPay}$`;
    console.log(state);
    render()
    toggleButtons('re-calc')
    
}
function toggleButtons(mode) {
  const showCalc = mode === 'reset';
  els.calculateBtn.style.display   = showCalc ? 'block' : 'none';
  els.recalculate.style.display = showCalc ? 'none'  : 'block';
}
function reset() {
  Object.assign(state, { bill:0, tip:0, people:0, Text:'' });

  els.inputs.forEach(inp => inp.value = '');
  els.result.innerText = '';
  toggleButtons('reset');
  console.log('working');
  
}

function render(){
    els.result.innerText = state.Text;
}




document.addEventListener('DOMContentLoaded', init);