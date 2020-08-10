// how to call object property in and out of object
// if function has in object He is called Method
const richPerson = {
    firstName: "Ali",
    lastName: "Omor",
    salary: 20000,
    bill: function (amount, tips){
     balance = this.salary - (amount + tips);
      return balance;
    }
}
console.log(richPerson.bill(5000));

// an object uses method from another object
const poorPerson = {
    firstName: "abu",
    lastName: "Umama",
    salary: 5000
}
const poorAmount = richPerson.bill.bind(poorPerson);
console.log(poorAmount(500));

// an object uses method from another object directly and more then argument separate by comma
const honestPerson = {
    firstName: "Abdul",
    lastName: "Hakim",
    salary: 50000
}
const honestPersonAmount = richPerson.bill.call(honestPerson, 10000, 20000);
console.log(honestPersonAmount);

// an object uses method from another object directly and more then argument separate by array

const badPerson = {
    firstName: "Micel",
    lastName: "Dark",
    salary: 200000
}
const badPersonAmount = richPerson.bill.apply(badPerson, [100000, 50000])
console.log(badPersonAmount);


// we can make more then object using class for similar tpe object
// new keyword: usd when want we make new object
class Persons{
    constructor(one, tow, three){
        this.firstName = one;
        this.lastName = tow;
        this.salary = three;
    }
}
console.log(new Persons("Abdul", "Hakim", 10000));
console.log(new Persons("Abdul", "Alim", 5000));




