const person = {
    name:"john",
    birthYear:1990,
    calculateAge:function(){
        return 2025 - this.birthYear
    }
}



const user = {
    name:'mark',
    birthYear:2000,
    gender:'male'
}

user.calculateAge = person.calculateAge;



let age1 = person.calculateAge()
console.log(age1)
let age2 = user.calculateAge()
console.log(age2)