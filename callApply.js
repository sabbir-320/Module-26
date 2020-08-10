// how to call object property in and out of object
// if function has in object He is called Method
const richPerson = {
    firstName: "Ali",
    lastName: "Omor",
    salary: 20000,
    bill: function (amount){
     balance = this.salary - amount;
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





