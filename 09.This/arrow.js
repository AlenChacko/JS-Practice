const person = {
    firstName:"alen",
    birthYear:1999,
    calculateAge:function(){
        const self = this
        const greet = ()=>{
            console.log(`good morning ${self.firstName}`)
        }
        greet()
        return 2025 - this.birthYear;
    }
}

let age = person.calculateAge()
// console.log(age)