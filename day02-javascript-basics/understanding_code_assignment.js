const accounts = [
  { 
    id: 1,
    username: 'Rein',
    password: '8bitglory',
    balance: 100,
  },
  
  {
    id: 2, 
    username: 'Danny',
    password: 'react-native',
    balance: 250,
  },
  
  {
    id: 3,
    username: 'Veerle',
    password: 'flopilo',
    balance: 175,
  },
];

function accountDoesNotExist() {
  const retry = confirm('Account does not exist... try again?')
  
  if(retry ===  true) {
    return authenticateUser();
  } else {
    return menu();
  }
}

function authenticateUser() {
  const username = prompt('Please enter your username');
  const account = accounts.find(account => account.username === username);
  
  if(!account) {
    return accountDoesNotExist();
  }
  
  let attempts = 3;
  let password;
  
  while(password != account.password) {
    password = prompt('Please enter your password');
    attempts--
    if(attempts === 0) {
      alert('Login failed, sorry');
      return exit();
    }
  }
  
  alert('Login succesful');
  return account;
}

function withdrawal(account) {
  const amount = parseInt(prompt(`How much do you want to withdraw? 
    Currentbalance: ${account.balance}`
  ));
  
  if(isNaN(amount)) {
    return alert('Error, withdrawal amount is not a number');
  }
  
  account.balance = account.balance -= amount;
  alert(`Withdrawal succesful, withdrew ${amount}`);
  return accessAccountOptions(account);
}

function deposit(account) {
  const amount = parseInt(prompt(`How much do you want to deposit? 
    Currentbalance: ${account.balance}`
  ));

  if(isNaN(amount)) {
    alert('Error, deposit amount is not a number');
    return accessAccountOptions(account);
  }
  
  account.balance = account.balance += amount;
  alert(`Deposit succesful, deposited ${amount}`);
  return accessAccountOptions(account);
}

function balance(account) {
  alert(`Your balance is ${account.balance}`);
  return accessAccountOptions(account);
}

function deleteAccount(account) {
  const confirmed = confirm('Are you sure you want to delete your account?')
  if(!confirmed) {
    return accessAccountOptions(account);
  }
  
  if(confirmed) {
    
  }
}

function accessAccountOptions(account) {
  const choice = prompt(`
    What do you want to do? Choose a number. 
    1 - withdrawal, 
    2 - deposit, 
    3 - balance,
    4 - delete account,
    5 - exit`
  );
  
  if(choice == 1) {
    return withdrawal(account);
  } else if(choice == 2) {
    return deposit(account);
  } else if(choice == 3) {
    return balance(account);
  } else if(choice == 4) {
    return deleteAccount(account);
  } else if(choice == 5) {
    return exit();
  }
  
  alert('Error, invalid input')
  return accessAccountOptions(account);
}

function accessAccount() {
  const account = authenticateUser();
  return accessAccountOptions(account);
}

function openAccount() {
  const id = accounts.length + 1;
  const username = prompt('Please enter a username');
  const password = prompt('Please enter a password');
  const deposit = parseInt(prompt('Please make an initial deposit'));
  
  if(isNaN(deposit)) {
    alert('Error, deposit is not a number account opening canceled');
    return exit();
  }
  
  const confirmed = confirm(`
    Is this info ok? 
    username: ${username} 
    deposit: ${deposit} 
  `);
  
  if(confirmed === false) {
    alert('Account opening canceled')
    return menu();
  }
  
  if(confirmed === true) {
    
    accounts.push({ 
      id: id,
      username: username, 
      password: password, 
      balance: deposit
    });
  
    alert(`Account ${username} opened succesfully`);
    return menu();
  }
}

function exit() {
  return alert('Thanks! Bye');
}

function menu() {
  const choice = prompt(`
    What do you want to do? Choose a number. 
    1 - access account, 
    2 - open account, 
    3 - exit`
  );
  
  if(choice == 1) {
    return accessAccount();
  } else if(choice == 2) {
    return openAccount();
  } else if(choice == 3) {
    return exit()
  }
  
  alert('Error, invalid input')
  return menu();
}

function start() {
  menu();
}

start();
