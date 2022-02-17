function getInputValue(expeness){
    const expenessCost = document.getElementById(expeness + '-cost');
    const expenessPerCost = parseInt(expenessCost.value);
    if(expenessCost.value == ''){
        // alert(7)
    }
    else{
        return expenessPerCost;
    }    
}

function calculateTotal(){
    // calculate total cost 
    const foodTotal = getInputValue('food');
    const rentTotal = getInputValue('rent');
    const clothesTotal = getInputValue('clothes');
    const expenessTotal = foodTotal + rentTotal + clothesTotal;
    // get income input
    const totalIncome = getInputValue('total-income-with');
    // calculate balance
    const totalBalance = totalIncome - expenessTotal;
    // error handle 
    if(foodTotal == '' || typeof foodTotal != 'number' && rentTotal == '' || typeof rentTotal != 'number' &&  clothesTotal == '' || typeof clothesTotal != 'number'){
        return alert('please fillup the input field')
    }
    // else if(typeof foodTotal != 'number' || typeof rentTotal != 'number' || typeof clothesTotal != 'number'){
    //     return alert('oops! please type a numeric number')
    // }
    else{
    // update on the html 
    document.getElementById('total-exp').innerText = expenessTotal;
    document.getElementById('total-balance').innerText = totalBalance;
    }   
    document.getElementById('total-exp').innerText = expenessTotal;
    document.getElementById('total-balance').innerText = totalBalance; 
}


function calculateSaving(){
    const totalIncome = getInputValue('total-income-with');
    // get saving input 
    const savingInput = getInputValue('just-save-no');
    //calculate saving amount
    const savingAmount = totalIncome * savingInput / 100;
    // calculate remaining amount 
    const foodTotal = getInputValue('food');
    const rentTotal = getInputValue('rent');
    const clothesTotal = getInputValue('clothes');
    const expenessTotal = foodTotal + rentTotal + clothesTotal;
    const totalBalance = totalIncome - expenessTotal;
    const remainingAmount = totalBalance - savingAmount;
    if(savingAmount > totalBalance){
        alert('What you want to save is more than your balance')
    }
    else{
        document.getElementById('saving-amount').innerText = parseInt(savingAmount);
        document.getElementById('remaining-amount').innerText = parseInt(remainingAmount);
    }  
}


// handle calculate button 
document.getElementById('calculate-total').addEventListener('click', function(){
    calculateTotal();
});


// handle save button 
document.getElementById('save-btn').addEventListener('click', function(){
    calculateSaving();
    
});