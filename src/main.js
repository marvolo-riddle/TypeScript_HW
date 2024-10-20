
class BankAccount {
  #balance = 0;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    if(amount > 0 && typeof amount === 'number') {
      this.#balance += amount;
    } else {
      throw new Error('Amount is invalid');
    }
    console.log(this.#balance);
  }

  withdraw(amount) {
    if(amount > 0 && typeof amount === 'number') {
      this.#balance -= amount;
    } else {
      throw new Error('Amount is invalid');
    }
    console.log(this.#balance);
  }

  getBalance(){
    console.log(this.#balance);
    return this.#balance;
  }

}

const user1 = new BankAccount(2000)
user1.deposit(4000)
user1.withdraw(1000)
user1.getBalance()