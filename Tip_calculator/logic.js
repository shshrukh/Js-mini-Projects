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
    els.calcutateBtn = document.querySelector('.calculate');
    els.inputs = document.querySelectorAll('input');
}



function bindEvents(){
    const inputArray = Array.from(els.inputs);
    inputArray.forEach((iteams)=>{
        iteams.addEventListener('keyup',handleAnswerTyping)
    });

    els.calcutateBtn.addEventListener('click', handleCalculation)


}

function handleAnswerTyping(e){
    const storeIdValue = e.target.id;
    if(storeIdValue === 'bill'){
        state.bill = e.target.value;
        console.log('user is typing', state.bill);
        
    }else if(storeIdValue === 'tip'){
        state.tip = e.target.value;
        console.log('user is typing', state.tip);
    }else{
        state.people = e.target.value;
        console.log('user is typing', state.people);
    }
    
}
function handleCalculation(){
    const {bill,tip, people} = state;
    const tipAmount = tip/100*bill;
    const totalAmount = Number(bill)+Number(tipAmount);
    console.log('total amount is ',totalAmount);
    
    const eachPersonPay = totalAmount/people;
    state.Text = `your bill is ${bill}$ and tip is ${tipAmount}$ tota amount is ${totalAmount}$ and each person pay ${eachPersonPay}$`;
    console.log(state);
    render()
    
}

function render(){
    els.result.innerText = state.Text;
}




document.addEventListener('DOMContentLoaded', init);