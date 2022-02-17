// convert input feild string to number
function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputFeildText = inputFeild.value;
    const inputAmountValue = parseFloat(inputFeildText);
    
    inputFeild.value = '';
    return inputAmountValue;
}


// function updateValue(valueId) {
//     const valueMain = document.getElementById(valueId);
//     const valueAmountText = valueMain.innertext;
//     const valueAmount = parseFloat(valueAmountText);
//     // return valueAmount;
// }

document.getElementById('calculate-button').addEventListener('click', function () {
   const foodAmount = getInputValue('food-input');
   const rentAmount = getInputValue('rent-input');
   const clothesAmount = getInputValue('clothes-input');
   const incomeAmount = getInputValue('income-input');
   

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


document.getElementById('save-button').addEventListener('click', function(){
  
    const incomeAmount = getInputValue('income-input');
    const saveAmount = getInputValue('save-input');
 
 
    //    savings
   const saveMain = document.getElementById('total-save');
   const saveAmountText = saveMain.innerText;
   const savingAmount = parseFloat(saveAmountText);
   const savetotal = savingAmount + incomeAmount / saveAmount;
   saveMain.innerText = savetotal;

   //    update main balance
   const balanceMain = document.getElementById('main-balance');
   const balanceAmountText = balanceMain.innerText;
   const balanceAmount = parseFloat(balanceAmountText);
   const balanceTotal = balanceAmount + incomeAmount - savetotal;
   balanceMain.innerText = balanceTotal;
})