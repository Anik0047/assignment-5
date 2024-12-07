document.getElementById('donate-btn-one').addEventListener('click', function(){
    const remainingAmount = donateMoney('donate-amount-one');
    document.getElementById('amount').innerText = remainingAmount;
})


function donateMoney(value){
    const donateAmount = parseFloat(document.getElementById(value).value);
    const amount = parseFloat(document.getElementById('amount').innerText);
    if(isNaN(donateAmount)){
        console.log('Please enter a valid amount');
        return;
    }

    if(donateAmount > amount){
        console.log('you dont have money');
        return;
    }
    
    const sum = amount - donateAmount;
    document.getElementById(value).value = ' ';
    return sum;
}
