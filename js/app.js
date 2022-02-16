function getInputValue(expeness){
    const expenessCost = document.getElementById(expeness + '-cost');
    const expenessPerCost = parseInt(expenessCost.value);
    // console.log(expenessPerCost);
    return expenessPerCost;
}

function calculateTotal(){
    const foodTotal = getInputValue('food');
    const rentTotal = getInputValue('rent');
    const clothesTotal = getInputValue('clothes');
    const expenessTotal = foodTotal + rentTotal + clothesTotal;
    // console.log(expenessTotal);
    const totalIncome = getInputValue('total-income-with');
    // const tax = subTotal/10;
    // const totalPrice = subTotal + tax;
    // // update on the html 
    document.getElementById('total-exp').innerText = expenessTotal;
    document.getElementById('total-balance').innerText =totalIncome - expenessTotal;
    // document.getElementById('total-price').innerText = totalPrice;
}


document.getElementById('calculate-total').addEventListener('click', function(){
    calculateTotal()
});