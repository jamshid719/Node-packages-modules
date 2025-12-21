//Module package CORE list (bash: node tabx2)

// // setTimeout module

// setTimeout(function () {
//   console.log("get started");
// }, 5000); // va wu modul ni iwga tuwirsak (bash: npm start)

// // setInterval module

// let number = 0;
// setInterval(function () {
//   console.log("hisob:", number);
//   number++;
// }, 2000); // va wu modul ni iwga tuwirsak (bash: npm start)

// // fs module
// const fs = require("fs");
// const data = fs.readFileSync("./input.txt", "utf8");
// console.log(data);

// console.log("============");

// fs.writeFileSync("./input.txt", `${data} \n\t\t by BegzodAli`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

//EXTERNAL module

// // - MOMENT (npm install moment --save)

// const moment = require("moment");
// const time = moment().format();
// // const time = moment().format("YYYY / MM / DD");
// console.log(time);

// // MOMENT module using with setInterval core module

// const moment = require("moment");
// setInterval(() => {
//   const time = moment().format();
//   console.log(`hozirgi vaqt: ${time}`);
// }, 2000);

// // -INQUIRER (npm install --save inquirer@^8.0.0)  => installing old version

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }]) // bu yerga prompt ham yozsa buladi
//   .then((answer) => {
//     console.log("man kiritgan raqam qiymati: ", answer.raqam);
//   }) // bu yerda javobni input orqali olinadi.
//   .catch((err) => console.log(err));

// // - VALIDATOR (npm i validator)

// const validator = require("validator");
// // const test = validator.isEmail("foo@bar.com"); // bu qiymat qaytaradi wuning un variable tenglandi.
// // const test = validator.isInt("100"); //true
// const test = validator.isIP("114.200.35.174");
// console.log("test:", test);

// // - UUID (not working => crypto coreModule)  or install => npm i uuid@11 (old version)

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// // console.log("random:", random);

// // // - CHALK (npm i chalk@4.1.2) => old version

// const chalk = require("chalk");
// // log = console.log(chalk);
// // console.log(chalk.blue("Hello") + random + chalk.red(" !"));
// console.log(chalk.blue(`uuid creates ${random}`));

// Nodemon (npm i nodemon) => "start": "nodemon index.js" (it gives avoiding to type npm start)

// npm install nodemon --global (install to directly CPU)
