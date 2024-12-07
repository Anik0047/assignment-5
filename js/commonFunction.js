function donateMoney(value, title, added){
    const donateAmount = parseFloat(document.getElementById(value).value);
    const amount = parseFloat(document.getElementById('amount').innerText);
    document.getElementById(added).innerText = donateAmount;

    if(isNaN(donateAmount)){
        alert('Please enter a valid amount');
        return amount;
    }

    if(donateAmount > amount){
        alert('You don’t have enough money');
        return amount;
    }
    
    const sum = amount - donateAmount;
    modal();
    historyUpdate(title, donateAmount);
    document.getElementById(value).value = '';
    return sum;
}


function historyUpdate(title, donateAmount){
    const titleName = document.getElementById(title).innerText;
    
    const containerBox = document.getElementById('history-container');
    
    const div = document.createElement('div');
    div.classList.add('border')
    div.classList.add('border-gray-500')
    div.classList.add('rounded-lg')
    div.classList.add('p-5')
    div.classList.add('mb-5')
    

    div.innerHTML = `
            <h6 class="text-lg lg:text-2xl font-bold pb-3">${donateAmount} Taka is Donated for ${titleName}</h6>
            <p>Date : ${new Date()}</p>
    `;

    containerBox.appendChild(div);
    console.log(containerBox)
}

function twoButton(value1,value2,value3,value4){
    document.getElementById(value1).classList.remove('hidden');
    document.getElementById(value2).classList.add('hidden');
    document.getElementById(value3).classList.remove('common-color');
    document.getElementById(value4).classList.add('common-color');
}

function modal(){
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('donation-list').classList.add('blur');
}