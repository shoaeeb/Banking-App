"use strict";

let qs = (selector) => document.querySelector(selector);
let $ = {};
//select all the elements inside my html using
//querySelector
//no use
$.movements = qs('[data-id="movements"]');
//the left box to append the history of the movements
$.leftbox = qs('[data-id="left-box"]');
//the current balance at the top
$.balance = qs('[data-id="balance"]');

//the deposit value which is in the bottom
//In
$.summaryIn = qs('[data-id="summary_in"]');
//the out value present in the bottom
$.summaryOut = qs('[data-id="summary_out"]');
//the interest
$.summaryInterest = qs('[data-id="summary_interest"]');

$.userName = qs('[data-id="user_name"]');
$.userPin = qs('[data-id="user_pin"]');
$.submit = qs('[data-id="operation_submit"]');

$.mainBody = qs('[data-id="main-body"]');

//transfer money section

$.transferUserName = qs('[data-id="transfer-username"]');
$.transferAmount = qs('[data-id="transfer-amount"]');
$.transferSubmit = qs('[data-id="transfer-submit"]');

//greet user
$.greet = qs('[data-id="greet"]');
//for request loan
$.requestAmountLoan = qs('[data-id="request-amount-loan"]');
$.requestSubmit = qs('[data-id="request-button"]');
//close account
$.closeUserName = qs('[data-id="close-username"]');
$.closeUserPin = qs('[data-id="close-userpin"]');
$.closeSubmit = qs('[data-id="close-submit"]');

//for sorting
$.sortBtn = qs('[data-id="sort-btn"]');
//to display the login time and date
$.currrentDateTime = qs('[data-id="currentDateTime"]');
//timer in the bottom
$.timer = qs('[data-id="timer"]');
//Data hard coded value for now
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, //%
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2023-05-08T17:01:17.194Z",
    "2023-08-11T23:36:17.929Z",
    "2023-08-14T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account = [account1, account2, account3, account4];
let formatDate = (date) => {
  console.log(date);
  const calDaysPassed = (date, date1) =>
    Math.round(Math.abs(date - date1) / (1000 * 60 * 60 * 24));
  let daysPassed = calDaysPassed(
    new Date().getTime(),
    new Date(date).getTime()
  );
  if (daysPassed === 0) return "TODAY";
  if (daysPassed === 1) return "YESTERDAY";
  if (daysPassed <= 7) return `${daysPassed} DAYS AGO`;

  const datte = new Date(date);
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  // return `${datte.toString().padStart(2, 0)}/${month
  //   .toString()
  //   .padStart(2, 0)}/${year}`;
  let options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  return new Intl.DateTimeFormat(currentAccount.locale, options).format(datte);
};
//format the movements
let formatMovements = (val, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(val);
};
//for displaying the history of transation
const displayMovements = (accountInfo, sort = false) => {
  console.log("ds");
  const { movements, movementsDates } = accountInfo;
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  $.leftbox.innerHTML = " ";
  movs.forEach((ele, i) => {
    let dateTime = accountInfo.movementsDates[i];
    console.log(ele);
    let displayDate = formatDate(dateTime);
    let currency = accountInfo.currency;
    // const formattedMov = new Intl.NumberFormat(accountInfo.locale, {
    //   style: "currency",
    //   currency,
    // }).format(ele);
    const formattedMov = formatMovements(
      ele,
      accountInfo.locale,
      accountInfo.currency
    );
    const str = ele > 0 ? "deposit" : "withdrawal";
    const html = `  <div class="content">
    <div class="info">
      <span class=${str}>${i + 1} ${str.toUpperCase()}</span>
      <span>${displayDate}</span>
    </div>
    <div class="money">${formattedMov} </div>
  </div>`;
    $.leftbox.insertAdjacentHTML("afterbegin", html);
  });
};
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//get deposits value into an array;
let deposit = (movements) => movements.filter((ele) => ele > 0);
//get withdrawal value into an array;

let withdrawal = (movements) => movements.filter((ele) => ele < 0);
//adding balance
let balance = movements.reduce((acc, ele) => acc + ele, 0);
//username from owner name
let createUserName = function (accounts) {
  accounts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
//display total balance;
let displayBalance = (accountInfo) => {
  const { movements } = accountInfo;
  accountInfo.currentBalance = movements.reduce((acc, ele) => acc + ele, 0);
  // $.balance.textContent = `${accountInfo.currentBalance.toFixed(2)} €`;

  // $.balance.textContent = new Intl.NumberFormat(
  //   accountInfo.locale,
  //   options
  // ).format(accountInfo.currentBalance);
  $.balance.textContent = formatMovements(
    accountInfo.currentBalance,
    accountInfo.locale,
    accountInfo.currency
  );
};
//display summary
let displaySummary = (accountInfo) => {
  const { movements, interestRate } = accountInfo;
  //this is for in movements
  let total = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  $.summaryIn.textContent = formatMovements(
    total,
    accountInfo.locale,
    accountInfo.currency
  );
  //this is for out movements
  let out = movements
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => acc + ele, 0);
  $.summaryOut.textContent = formatMovements(
    out,
    accountInfo.locale,
    accountInfo.currency
  );

  const interest = movements
    .filter((deposit) => deposit > 0)
    .map((deposit) => (deposit * interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  $.summaryInterest.textContent = formatMovements(
    interest,
    accountInfo.locale,
    accountInfo.currency
  );
  return;
};
//greet the user
let greetUser = ({ owner }) => {
  $.greet.textContent = `Welcome Nice to See You 💖 ,${owner.split(" ")[0]}`;
};
let max = (accountInfo) => {
  const { movements } = accountInfo;
  return movements.reduce((acc, ele) => {
    if (acc > ele) {
      return acc;
    } else {
      return ele;
    }
  });
};
// displayMovements(account1);
// displayBalance(account1);
createUserName(account);
// displaySummary(account1);
let deposits = deposit(movements);
let withdrawals = withdrawal(movements);

window.onkeydown = function (e) {
  if (e.key === "Enter") {
  }
};
let displayDate = (currentAccount) => {
  const dateTime = new Date();
  // const date = dateTime.getDate();
  // const month = dateTime.getMonth() + 1;
  // const year = dateTime.getFullYear();
  // const hour = dateTime.getHours();
  // const min = dateTime.getMinutes();
  let options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  const format = new Intl.DateTimeFormat(currentAccount.locale, options).format(
    dateTime
  );

  $.currrentDateTime.textContent = `As of ${format}`;
  // ${date
  //   .toString()
  //   .padStart(2, 0)}/${month.toString().padStart(2, 0)}/${year},${hour}:${min
  //   .toString()
  //   .padStart(2, 0)}`;
};
let startTimer = () => {
  let time = 120;

  let tick = function () {
    let minute = Math.trunc(time / 60);
    let second = Math.trunc(time % 60);

    $.timer.textContent = `${minute.toString().padStart(2, 0)}:${second
      .toString()
      .padStart(2, 0)}`;
    if (time === 0) {
      clearInterval(timer);
      $.mainBody.style.opacity = 0;
      $.greet.textContent = "Login to get Started";
    }
    time--;
  };
  tick();
  let timer = setInterval(tick, 1000);
  return timer;
};
let updateUI = (currentAccount) => {
  displayBalance(currentAccount);
  displayMovements(currentAccount);
  displaySummary(currentAccount);
  displayDate(currentAccount);
};
let currentAccount, timer;
$.submit.addEventListener("click", (e) => {
  currentAccount = account.find((acc) => acc.username === $.userName.value);
  if (currentAccount?.pin === +$.userPin.value) {
    greetUser(currentAccount);
    updateUI(currentAccount);
    if (timer) {
      clearInterval(timer);
    }
    timer = startTimer();
    greetUser(currentAccount);
    displayDate(currentAccount, true);
    $.mainBody.style.opacity = 100;
  }
  $.userName.value = "";
  $.userPin.value = "";
  $.userName.blur();
  $.userPin.blur();
});

$.transferSubmit.addEventListener("click", function () {
  const userAccountToTranfer = account.find(
    (acc) => acc.username === $.transferUserName.value
  );
  const userAmount = +$.transferAmount.value;
  console.log(userAmount > 0);
  if (
    userAmount > 0 &&
    userAccountToTranfer &&
    currentAccount.currentBalance >= userAmount &&
    userAccountToTranfer?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-userAmount);
    //now add positive movements to the account
    //in which the money is transferred to
    userAccountToTranfer.movements.push(userAmount);
    const date = new Date().toISOString();
    console.log(date);
    userAccountToTranfer.movementsDates.push(Date.now());
    currentAccount.movementsDates.push(Date.now());
    updateUI(currentAccount);
  }
  $.transferAmount.value = "";
  $.transferUserName.value = "";
  $.transferAmount.blur();
  $.transferUserName.blur();

  if (timer) clearInterval(timer);
  timer = startTimer();
});
//for requestloan
$.requestSubmit.addEventListener("click", () => {
  const amount = Math.floor($.requestAmountLoan.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    const date = new Date();
    currentAccount.movements.push(amount);
    currentAccount.movementsDates = [
      ...currentAccount.movementsDates,
      date.toISOString(),
    ];
    //update the ui
    updateUI(currentAccount);
    if (timer) clearInterval(timer);
    timer = startTimer();
  }
  $.requestAmountLoan.value = "";
});
//close account means deleting the account from the database
//for close account
$.closeSubmit.addEventListener("click", () => {
  if (
    currentAccount.username === $.closeUserName.value &&
    currentAccount.pin === +$.closeUserPin.value
  ) {
    const index = account.findIndex(
      (acc) => acc.username === $.closeUserName.value
    );
    account.splice(index, 1); //just removing one element from the array
    $.mainBody.style.opacity = 0;
    $.greet.textContent = "Login to get Started";
  }
  $.closeUserName.value = $.closeUserPin.value = "";
});
//for sorting
let sorted = false;
$.sortBtn.addEventListener("click", () => {
  // updateUI(currentAccount);
  displayMovements(currentAccount, !sorted);
  //sorted = sorted ? false : true; //
  sorted = !sorted;
});
