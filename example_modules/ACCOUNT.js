class Account {
  #amount;
  #account_ID;
  constructor(name, amount, account_ID) {
    this.name = name;
    this.#amount = amount;
    this.#account_ID = account_ID;
  }
  TellMeBalance() {
    console.log(`Sizning balansingiz: ${this.#amount}$`);
    return this.#amount;
  }
}
