class Cal {
    static Subtraction(x, y, z) {
        if (x != undefined && y != undefined && z != undefined) {
            console.log(x - y - z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x - y)
        }
        else {
            console.log('please enter valid input')
        }
    }
}
Cal.Subtraction(25, 10, 5)
Cal.Subtraction(25, 10)
Cal.Subtraction(25)


// ---------------------
class worldbank {
    country = "India"
    loan(x) {
        console.log('loan from world bank')
        return x
    }
    save(x) {
        console.log('save from world bank')
        return x
    }
}
class Sbi extends worldbank {
    loan(x) {
        console.log('loan from Sbi')
        return x + 1
    }
    save(x) {
        console.log('save from Sbi')
        return x + 1
    }
}
class Pnb extends worldbank{
    loan(x) {
        console.log('loan from Pnb')
        return x + 1+1
    }
    save(x) {
        console.log('save from Pnb')
        return x + 1+1
    }

}
let nagpur =  new Sbi()
console.log(nagpur.loan(1))
console.log(nagpur.save(3))

let wardh = new Pnb()
console.log(wardh.loan(1))
console.log(wardh.save(3))