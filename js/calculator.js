// convert input feild string to number
function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputFeildText = inputFeild.value;
    const inputAmountValue = parseFloat(inputFeildText);
    
    inputFeild.value = '';
    return inputAmountValue;
}


document.getElementById('calculate-button').addEventListener('click', function () {
   const foodAmount = getInputValue('food-input');
   const rentAmount = getInputValue('rent-input');
   const clothesAmount = getInputValue('clothes-input');
   const incomeAmount = getInputValue('income-input')

//    update expenses
   const expensMain = document.getElementById('total-expenses');
   const expensAmountText = expensMain.innerText;
   const expensAmount = parseFloat(expensAmountText);
   const expenseTotal = expensAmount + foodAmount + rentAmount + clothesAmount;
   expensMain.innerText = expenseTotal;

//    update balance
   const balanceMain = document.getElementById('prev-balance');
   const balanceAmountText = balanceMain.innerText;
   const balanceAmount = parseFloat(balanceAmountText);
   const balanceTotal = balanceAmount + incomeAmount - expenseTotal;
   balanceMain.innerText = balanceTotal;

})

