//TYPE OF PACKAGES: CORE | EXTERNAL | FILE

//Module package CORE - node uzida bydefault urnatilgan package modullar
//Module package EXTERNAL - tawqaridan ob kelb urnatiladigan package modullar
//Module package FILE - uzimiz bevosita yaratadigan package modullar

/*- Ma`lum bir folderni nodeJS proektga aylantiriw un terminalga npm init --yes kiritilsa, 
 bizga package.json faylini yaratib beradi.

// - node faylNomi.js iw ga tuwuriw un bash ga node index.js yoziwni urniga tugridan tugri json ning
uziga script qismiga yozamiz ("start": "node faylNomi.js"), undan kn terminal ga node bn emas,
"npm start" bersak boldi. Va undan oldin bir marta "npm run start" yoziw maqsadga muvofiq.
 
// Standartlar 2 xil buladi: CommonJS | ModuleJS
NodeJs da bydefault commonjs da buladi, uni ModulJs ga uzgartiriw un Json faylga "type: module" yoziw kk.
Misol un:
          ModuleJs da: import fs from "fs"
          CommonJs da: const fs = require("fs")
external packagelarni wunday iwlatiladi.

// Hozirda ReactJs, Typescript lar moduleJs da iwlaydi.

// - Module package CORE - uzida core function, core object, core classlar , core package iborat. 
fs ga uhwagan core packagelarni chaqiriw un reqire orqali chaqiramiz, core ni ichida bulsa ham, package ligi sabab 
huddi external packageday chaqiramiz.

// - Package larni isntal qiliwning 3 xil usuli bor: dependency | devDependency | global
- dependency method: ham product ham develop jarayonida iwlatiladigan packagelar install qilinadi 
- devDependency method: asosan develop jarayonida iwlatiladigan packagelar install qilinadi. m-n: "nodemon".
   => npm i nodemon --save-dev  or  npm i nodemon -D
- global method: bunda ham asosan develop jarayonida iwlatiladigan packagelar install qilinadi.
    => npm i nodemon --global
*/

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
