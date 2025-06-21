const currencyEl_one=document.getElementById('currency-one');
const amountEl_one=document.getElementById('amount-one');
const currencyEl_two=document.getElementById('currency-two');
const amountEl_two=document.getElementById('amount-two');
const rateEl=document.getElementById('rate');
const swap=document.getElementById('swap');

// addEventListener
currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);

//fetch Exchange Rates and Update the Dom
function calculate() {
    const currencyOne= currencyEl_one.value;
    const currencyTwo= currencyEl_two.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json()).then(data =>{
        //console.log(data)
        const rate= data.rates[currencyTwo];
        rateEl.innerText=`1 ${currencyOne} = ${rate} ${currencyTwo}`
        //console.log(rate)
        amountEl_two.value=(amountEl_one.value*rate).toFixed(2);
        console.log()
    })
}

swap.addEventListener('click',()=>{
    const temp=currencyEl_one.value;
    currencyEl_one.value=currencyEl_two.value;
    currencyEl_two.value=temp;
    calculate()
})
calculate()