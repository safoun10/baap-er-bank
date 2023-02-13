document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositData = document.getElementById("input-deposit-amount");
    const updatingDepositData = parseFloat(depositData.value);

    depositData.value = "";
    
    const totalDeposit = document.getElementById("total-deposit");
    const updatingTotalDeposit = parseFloat(totalDeposit.innerText);
    
    const newDepositData = updatingTotalDeposit + updatingDepositData;
    totalDeposit.innerText = newDepositData;

    const balance = document.getElementById("current-balance");
    const currentBalance = parseFloat(balance.innerText);

    const totalBalance = currentBalance + updatingDepositData;
    balance.innerText = totalBalance;
    
})

document.getElementById("withdraw-btn").addEventListener("click", function(){
    const withdrawAmount = document.getElementById("input-withdraw-amount");
    const updatedWithdrawAmount = parseFloat(withdrawAmount.value);

    withdrawAmount.value = "";

    const withdraw = document.getElementById("withdraw-money");
    const updatedWithdraw = parseFloat(withdraw.innerText);

    const totalWithdraw = updatedWithdrawAmount + updatedWithdraw ;

    withdraw.innerText = totalWithdraw;

    const balance = document.getElementById("current-balance");
    const currentBalance = parseFloat(balance.innerText);

    const totalBalance = currentBalance - updatedWithdrawAmount;
    balance.innerText = totalBalance;
})