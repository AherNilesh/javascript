//deposit(), withdrawl(),transaction(),totalDeposite(),totalWithdrawl()
class Bank{
    constructor(accName,accNo,branch,bal){
        this.accName=accName
        this.accNo = accNo
        this.branch = branch
        this.bal = bal
        this.transaction = []
    }
    deposite(amount) {
        this.bal = this.bal + amount
        this.transaction.push(amount)
        return this.bal
    }
    withdrawl(amount) {
        if (this.bal >= amount) {
            this.bal = this.bal - amount
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('Insufficient Balance')
        }
    }
    lastFiveTranscation() {
        return this.transaction.slice(-5)
    }

    totalDepositeA() {
        return this.transaction.filter((el) => {
            return el > 0
        }).reduce((acc, el) => {
            return acc + el
        }, 0)
    }

    totalWithdrawlA() {
        return this.transaction.filter(function (el) {
            return el < 0
        }).reduce(function (acc, el) {
            return acc + el
        }, 0)

    }
}
let nilesh=new Bank('nilesh',123456,'sangamner',5000)
console.log(nilesh)
nilesh.deposite(200)
nilesh.withdrawl(500)
nilesh.deposite(400)
nilesh.withdrawl(500)
nilesh.deposite(330)
console.log(nilesh.transaction)
