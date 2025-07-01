console.log("personal: " + "budget tracker app");

// function to save budget data to local storage
function saveBudgetToLocal(userBudget) {
  localStorage.setItem("userBudget", JSON.stringify(userBudget));
}

// function to read budget data from local storage
function getBudgetFromLocal() {
  const savedBudget = localStorage.getItem("userBudget");
  return savedBudget ? JSON.parse(savedBudget) : null;
}

// function to clear budget data from local storage
function clearBudgetFromLocal() {
  localStorage.removeItem("userBudget");
  console.log("budget data cleared from the local storage");
}

// function to get user input
function getUserInput(promptMessage, isnumber = false) {
  const userInput = prompt(promptMessage);
  return isnumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses) {
  const expenses = [];
  for (let i = 0; i < numberOfExpenses; i++) {
    let expense = getUserInput(`enter expense ${i + 1}: `, true);
    if (isNaN(expense) || expense <= 0) {
      console.log(`invalid input for expense ${i + 1}. resetting it to $0`);
      expense = 0;
    }
    expenses.push(expense);
  }
  return expenses;
}

function calculateTotalExpenses(expenses) {
  let totalExpenses = 0;
  for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
  }
  return totalExpenses;
}

function calculateTax(income, taxRate) {
  return income * taxRate;
}

function calculateNetIncome(income, tax) {
  return income - tax;
}

// 🔧 Fixed spelling: calculatBalance → calculateBalance
function calculateBalance(net_income, totalExpenses) {
  return net_income - totalExpenses;
}

// 🔧 Fixed spelling: calculatesavings → calculateSavings
function calculateSavings(balance, savingAmount) {
  return balance * savingAmount;
}

function getFinancialStatus(savings) {
  let finalStatus = "";

  if (savings >= 1000) {
    finalStatus = "You are saving excellently.";
  } else if (savings >= 500 && savings < 1000) {
    finalStatus = "You are saving well.";
  } else if (savings >= 100 && savings < 500) {
    finalStatus = "You need improvement.";
  } else {
    finalStatus = "Critical: your savings are too low.";
  }
  return finalStatus;
}

function checkOverspending(userBudget) {
  return userBudget.totalExpenses > userBudget.income
    ? "Warning: You are spending more than your income!"
    : "";
}

function displayResult(userBudget) {
  console.log(`User: ${userBudget.name}`);
  console.log(`Total income: ${userBudget.income}`);
  console.log(`Total Expenses: ${userBudget.totalExpenses}`);
  console.log(`Tax deducted: ${userBudget.tax}`);
  console.log(`Net income After Tax: ${userBudget.net_income}`);
  console.log(`Remaining Balance: ${userBudget.balance}`);
  console.log(`Savings: ${userBudget.savings}`);
  console.log(userBudget.finalStatus);

  const overSpendingMessage = checkOverspending(userBudget);
  if (overSpendingMessage) {
    console.log(overSpendingMessage);
  }
}

function calculateBudget(userBudget) {
  const numberOfExpenses = getUserInput(
    "How many expenses do you have: ",
    true
  );
  userBudget.expenses = getExpenses(numberOfExpenses);

  console.log("Expense breakdown:");
  for (let i = 0; i < userBudget.expenses.length; i++) {
    console.log(`Expense ${i + 1}: $${userBudget.expenses[i]}`);
  }

  userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);
  userBudget.tax = calculateTax(userBudget.income, 0.1);
  userBudget.net_income = calculateNetIncome(userBudget.income, userBudget.tax);
  userBudget.balance = calculateBalance(
    userBudget.net_income,
    userBudget.totalExpenses
  );
  userBudget.savings = calculateSavings(userBudget.balance, 0.2);
  userBudget.finalStatus = getFinancialStatus(userBudget.savings);
  saveBudgetToLocal(userBudget);
}

function runBudgetTracker() {
  let userBudget = getBudgetFromLocal();
  if (userBudget) {
    console.log("Previous budget data loaded from local storage.");
    displayResult(userBudget);
  } else {
    userBudget = {
      name: "",
      income: 0,
      expenses: [],
      totalExpenses: 0,
      tax: 0,
      net_income: 0,
      balance: 0,
      savings: 0,
      finalStatus: "",
    };

    userBudget.name = getUserInput("Enter your name: ");
    userBudget.income = getUserInput("Enter your total income: ", true);

    if (isNaN(userBudget.income) || userBudget.income <= 0) {
      console.log("Invalid input. Please enter a valid number.");
      return;
    } else {
      calculateBudget(userBudget);
      displayResult(userBudget);
    }
  }
}

runBudgetTracker();
