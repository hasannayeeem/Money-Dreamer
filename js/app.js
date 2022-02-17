function getInputValue(expeness){
    const expenessCost = document.getElementById(expeness + '-cost');
    const expenessPerCost = parseInt(expenessCost.value);
    // console.log(expenessPerCost);
    return expenessPerCost;
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

    
    if(foodTotal == '' || rentTotal == '' || clothesTotal == ''){
        console.log('v');
    }
    else{
        // // update on the html 
    // document.getElementById('total-exp').innerText = expenessTotal;
    document.getElementById('total-balance').innerText = totalBalance;
    }
    // calculate saving amount
    /* if(savingInput == '' && savingInput!= 'number'){
        const savingAmount = totalIncome / savingInput;
        document.getElementById('saving-amount').innerText = savingAmount;
    } */
    
    
}
function calculateSaving(){
    const totalIncome = getInputValue('total-income-with');
    // get saving input 
    const savingInput = getInputValue('just-save-no');
    //calculate saving amount
    const savingAmount = totalIncome / savingInput;
    // calculate remaining amount 
    const foodTotal = getInputValue('food');
    const rentTotal = getInputValue('rent');
    const clothesTotal = getInputValue('clothes');
    const expenessTotal = foodTotal + rentTotal + clothesTotal;
    const totalBalance = totalIncome - expenessTotal;
    const remainingAmount = totalBalance - savingAmount;
    
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-amount').innerText = remainingAmount;
    // clear input field 
    
}
// handle calculate button 
document.getElementById('calculate-total').addEventListener('click', function(){
    calculateTotal();
});
// handle save button 
document.getElementById('save-btn').addEventListener('click', function(){
    calculateSaving();
    
});