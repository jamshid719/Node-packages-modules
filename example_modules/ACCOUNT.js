const moment = require("moment");

class Account {
  #amount;
  #account_ID;
  constructor(name, amount, account_ID) {
    this.name = name;
    this.#amount = amount;
    this.#account_ID = account_ID;
  }

  tellMeBalance() {
    console.log(`Sizning balansingiz: ${this.#amount}$`);
    return this.#amount;
  }

  withdrawMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(
        `Sizning hisobizdan ${amount} yechildi va qoldiq ${this.#amount}$`
      );
    } else {
      console.log(`Balansda yetarli pul yuq: ${this.#amount}$`);
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(
      `Hisobingiz tuldirildi va hisobingiz ${this.#amount}$ tashkil etdi`
    );
  }

  giveDetails() {
    console.log(
      `Salom hurmatli mijozimiz ${this.name} va sizning hisobingiz ${
        this.#amount
      }$ ga teng`
    );
    console.log(`Sizning hisob raqamingiz:`, this.#account_ID);
  }

  static tellAboutThisClass() {
    console.log("Bu class accountlarni yasab beradi");
  }

  static tellCurrentTime() {
    console.log(`Hozirgi vaqt: ${moment().format("YYYY MM DD HH:mm:ss")}`);
  }
}

module.exports = Account;
