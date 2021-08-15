document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit');
    const depositAmount = depositInput.value;
    

    const currentDeposit = document.getElementById('totalDeposit');

    const newDepositeAmount =  parseFloat(currentDeposit.innerText) + parseFloat(depositAmount);

    

    currentDeposit.innerText = newDepositeAmount;

    // update account 
    const balanceTotal = document.getElementById('totalBalance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalance + parseFloat(depositAmount);

    balanceTotal.innerText = newBalanceTotal;


    // clear deposit input field

    depositInput.value = '';
})

// withdraw 


document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw');
    const withdrawAmount = withdrawInput.value;

    const currentWithdraw = document.getElementById('totalWithdraw');

    const newWithdrawAmount = parseFloat(currentWithdraw.innerText) + parseFloat(withdrawAmount);

    currentWithdraw.innerText = newWithdrawAmount;

    // update account 
    const balanceTotal = document.getElementById('totalBalance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalance - parseFloat(withdrawAmount);

    balanceTotal.innerText = newBalanceTotal;




    withdrawInput.value = '';
})