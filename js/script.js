document.getElementById('donate-btn-one').addEventListener('click', function(){
    const remainingAmount = donateMoney('donate-amount-one', 'title-one', 'add-one');
    document.getElementById('amount').innerText = remainingAmount;
})

document.getElementById('donate-btn-two').addEventListener('click', function(){
    const remainingAmount = donateMoney('donate-amount-two', 'title-two', 'add-two');
    document.getElementById('amount').innerText = remainingAmount;
})

document.getElementById('donate-btn-three').addEventListener('click', function(){
    const remainingAmount = donateMoney('donate-amount-three', 'title-three', 'add-three');
    document.getElementById('amount').innerText = remainingAmount;
})

document.getElementById('donate-btn-four').addEventListener('click', function(){
    const remainingAmount = donateMoney('donate-amount-four', 'title-four', 'add-four');
    document.getElementById('amount').innerText = remainingAmount;
})

document.getElementById('donate-btn-five').addEventListener('click', function(){
    const remainingAmount = donateMoney('donate-amount-five', 'title-five', 'add-five');
    document.getElementById('amount').innerText = remainingAmount;
})

// history 
document.getElementById('history-btn').addEventListener('click', function(){
    twoButton('history-container','donation-list','donation-btn','history-btn');
})

document.getElementById('donation-btn').addEventListener('click', function(){
    twoButton('donation-list','history-container','history-btn','donation-btn');
})

// modal
document.getElementById('modal-close').addEventListener('click', function(){
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('donation-list').classList.remove('blur');
})


