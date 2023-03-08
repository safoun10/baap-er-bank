document.getElementById("deposit-btn").addEventListener("click", function () {

    const depositData = document.getElementById("input-deposit-amount");
    const totalDeposit = document.getElementById("total-deposit");
    const balance = document.getElementById("current-balance");

    const updatingDepositData = parseFloat(depositData.value);
    const updatingTotalDeposit = parseFloat(totalDeposit.innerText);
    const currentBalance = parseFloat(balance.innerText);
    
    if (typeof updatingDepositData !== "number" || isNaN(updatingDepositData)) {
        alert("Please input a valid number!!");
        return;
    }
    
    const newDepositData = updatingTotalDeposit + updatingDepositData;
    totalDeposit.innerText = newDepositData;
    
    const totalBalance = currentBalance + updatingDepositData;
    balance.innerText = totalBalance;
    
    depositData.value = "";
})

document.getElementById("withdraw-btn").addEventListener("click", function () {

    const withdrawAmount = document.getElementById("input-withdraw-amount");
    const withdraw = document.getElementById("withdraw-money");
    const balance = document.getElementById("current-balance");

    const updatedWithdrawAmount = parseFloat(withdrawAmount.value);
    const updatedWithdraw = parseFloat(withdraw.innerText);
    const currentBalance = parseFloat(balance.innerText);
    
    if (typeof updatedWithdrawAmount !== "number" || isNaN(updatedWithdrawAmount)) {
        alert("Please input a valid number!!");
        return;
    }
    
    if (updatedWithdrawAmount > currentBalance) {
        alert("Sorry , you can't withdraw more than your balance!!");
        return;
    }
    
    const totalWithdraw = updatedWithdrawAmount + updatedWithdraw;
    withdraw.innerText = totalWithdraw;
    
    const totalBalance = currentBalance - updatedWithdrawAmount;
    balance.innerText = totalBalance;

    withdrawAmount.value = "";
})