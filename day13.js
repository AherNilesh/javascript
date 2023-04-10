class bank {
    constructor(fn, ln, bal) {
        this.firstname = fn
        this.lastname = ln
        this.balance = bal
        this.transaction = []

    }
    displayname() {
        console.log(this.firstname + this.lastname)
    }
    deposit(amount) {
        this.balance = this.balance + amount
        this.transaction.push(amount)
        return this.balance
    }
    withdrawl(amount) {
        if (amount < this.bal) {
            this.balance = this.balance - amount
            this.transaction.push(-amount)
            return this.balance
        }
        else {
            console.log("insufficient balannce..")
        }
    }
    lastfivetransaction() {
        return this.transaction.slice(-5)
    }
}

let nilesh=new bank("nilesh","aher",200)
// nilesh.withdrawl(5000)

nilesh.deposit(200000)
nilesh.deposit(20000)
nilesh.deposit(2000)
nilesh.deposit(200)
nilesh.deposit(20)

nilesh.withdrawl(5000)
nilesh.withdrawl(500)
nilesh.withdrawl(50)
nilesh.withdrawl(5)
console.log(nilesh.lastfivetransaction)