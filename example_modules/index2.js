//FILE package module.

//  - console.log(require("exports").wrapper); nodejs ning asosiy sintaksislarni chiqarib beradi.

/* - File package module larni asosan "./" belgisini quyib iwlatiladi, bu degani wu file modul imiz bizning proektimizda
 joylawganligini anglatadi.
 Agar wu belgini quymasak izlawni proektimizdan bowlab => Desktop=> Users => nodejs ustanovka qilingan papkacha izlaydi.
 nodejs ni uzini argumentlari bor va u console.log(arguments) orqali kursatiladi.

/*console.log(arguments); // yozsak, va bizga ketma ket izlaw mexanizmini kursatib beradi. 
'C:\\Users\\USER\\Desktop\\MIT38\\example_modules\\node_modules',
      'C:\\Users\\USER\\Desktop\\MIT38\\node_modules',
      'C:\\Users\\USER\\Desktop\\node_modules',
      'C:\\Users\\USER\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
      */

// // Funksiyali FILE package module

// const calculate = require("./hisob");

// natija = calculate.kupaytirish(80, 20);
// console.log("natija:", natija);
// console.log("============");

// natija1 = calculate.bulish(80, 20);
// console.log("natija1:", natija1);
// console.log("============");

// natija2 = calculate.qushish(80, 20);
// console.log("natija2:", natija2);
// console.log("============");

// natija3 = calculate.ayirish(80, 20);
// console.log("natija3:", natija3);
// console.log("============");

//==================================================================================//

// //Class yordamida yasalgan FILE package module

// const Account = require("./account");
// Account.tellAboutThisClass();
// Account.tellCurrentTime();
// console.log("=============================================");
// const myAccount = new Account("Floyd", 200000, 25565151);
// myAccount.tellMeBalance();
// myAccount.makeDeposit(1000000);
// // myAccount.withdrawMoney(2000000);
// myAccount.withdrawMoney(400000);
// myAccount.makeDeposit(200000);
// myAccount.giveDetails();

//Xulosa: biz bu yerda hisob.js va account.js file larni FILE package module sifatida ishlatdik.
