#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class bankaccount {
    acountNumber;
    balance;
    static acountNumber;
    constructor(balance, acountNumber) {
        this.acountNumber = acountNumber;
        this.balance = balance;
    }
    Withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`succsesfully withdraw $${chalk.yellowBright(amount)}`);
            console.log(`Remaining balance Now $${chalk.yellowBright(this.balance)} `);
        }
    }
    deposit(amount) {
        if (amount >= 100) {
            if (amount <= 10000) {
                amount -= 100;
            }
            else if (amount <= 100000) {
                amount -= 500;
            }
            else if (amount <= 1000000) {
                amount -= 1000;
            }
            else {
                console.log(`ADD SOME AMOUNT:$`);
            }
        }
        this.balance += amount;
        console.log(`Tax charges to Remove in Your : Bank-Acount - $${chalk.red(amount)}`);
        console.log(`you succsesfully deposit Now Your balance  $${chalk.yellow(this.balance)}`);
    }
    checkbalance() {
        console.log(`You have /${this.balance}`);
    }
}
const mybank = [
    new bankaccount(5500, 2011),
    new bankaccount(3000, 2013),
    new bankaccount(1000, 2006),
    new bankaccount(5000, 7563),
    new bankaccount(6000, 6924),
    new bankaccount(1000, 6742),
    new bankaccount(8000, 5986),
    new bankaccount(4000, 5721),
    new bankaccount(3000, 4702),
    new bankaccount(1000, 7682),
    new bankaccount(2000, 9852),
];
class BankId {
    firstNum;
    lastNum;
    Gender;
    age;
    mobileNumber;
    Acount;
    constructor(fristNum, lastNum, Gender, age, mobileNumber, Acount) {
        this.firstNum = fristNum;
        this.lastNum = lastNum;
        this.Gender = Gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.Acount = Acount;
    }
}
let Userid = [
    new BankId("nida", "shaikh", "female", 19, 2090843247, mybank[0]),
    new BankId("syed", ",bhukahri", "male", 29, 3090843247, mybank[1]),
    new BankId("noreen", "khan", "female", 35, 4090843247, mybank[2]),
    new BankId("waqar", "shaikh", "male", 23, 6090843247, mybank[3]),
    new BankId("wasiq", "qureshi", "male", 41, 8090843247, mybank[4]),
    new BankId("rafi", "shiya", "male", 52, 5090843247, mybank[5]),
    new BankId("shereen", "norani", "female", 64, 4090843247, mybank[6]),
    new BankId("feroza", "patni", "female", 41, 7090843247, mybank[7]),
    new BankId("azeem", "arabi", "male", 52, 8090843247, mybank[8]),
    new BankId("iqbal", "pasha", "male", 64, 9090843247, mybank[9]),
    new BankId("gurya", "shaikh", "female", 41, 4090843247, mybank[10]),
];
let bank = async () => {
    let pincode = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: chalk.blueBright(`Please enter your ${chalk.italic(`PIN`)} => `),
        }
    ]);
    do {
        let checkpin = Userid.find(Pincode => Pincode.Acount.acountNumber === pincode.pin);
        if (checkpin) {
            let name = checkpin.firstNum.toUpperCase();
            let last_name = checkpin.lastNum.toUpperCase();
            console.log(chalk.bold(` WELCOME TO BANK OF A & H : ${chalk.yellowBright(name)} ${chalk.yellowBright(last_name)}`));
            let withdraw = await inquirer.prompt([
                {
                    name: "options",
                    type: "list",
                    message: chalk.blueBright("What would you like to do =>"),
                    choices: ["Withdraw", "Deposit", "checkbalance", "Exiting"]
                }
            ]);
            if (withdraw.options === "Withdraw") {
                let amount = await inquirer.prompt([
                    {
                        name: "Amount",
                        type: "number",
                        message: "How much would you like to withdraw? $"
                    }
                ]);
                checkpin.Acount.Withdraw(amount.Amount);
            }
            if (withdraw.options === "Deposit") {
                let deposit = await inquirer.prompt([
                    {
                        name: "Amount",
                        type: "number",
                        message: "How much would you like to deposit? $"
                    }
                ]);
                checkpin.Acount.deposit(deposit.Amount);
            }
            if (withdraw.options === "checkbalance") {
                console.log(`Currently your acount balance is ${checkpin.Acount.balance}`);
            }
            if (withdraw.options === "Exiting") {
                console.log(`|      Exiting bank Programing....`);
                console.log(`Thanks you ${chalk.yellowBright(name)} ${chalk.yellowBright(last_name)} for visiting over bank service`);
                return;
            }
        }
    } while (true);
};
bank();
