class Account {
    constructor(name, balance = 0) {
        this.id = Math.random();
        this.name = name;
        this._balance = balance;
    }
    
    get balance() {
        return this._balance;
    }

    set balance(newBalance) {
        if(newBalance >= 0) {
            this._balance = newBalance;
        } else {
            return "Balance cannot be negative";
        }
    }

    credit(amountOfMoney) {
        if(amountOfMoney >= 0) {
            this._balance += amountOfMoney;
            return this._balance;
        } else {
            return "Amount should be greater than 0";
        }
    }

    debit(amountOfMoney) {
        if(amountOfMoney >= 0 && this._balance >= amountOfMoney) {
            this._balance -= amountOfMoney;
            return this._balance;
        } else {
            return "Amount should be greater than 0 and less than or equal to the current balance";
        }
    }

    transferTo(account, amountOfMoney) {
        if(amountOfMoney > 0 && this._balance >= amountOfMoney){
            this._balance -= amountOfMoney;
            account.credit(amountOfMoney);
            return "Success";
        }
        return "Failer";
    }

    static identifyAccounts(...args) {
        return [...args].map(item => {
            return `${item.name} is a part of Account: ${item instanceof Account}`;
        });
    }
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);
saving.credit(5000); // 6000
saving.debit(1000); // 5000
saving.debit(2000); // 3000
saving.transferTo(current, 1000); // saving 2000 current 9000
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current, saving);
console.log(res);