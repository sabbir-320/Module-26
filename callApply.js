// how to call object property in and out of object
const richPerson = {
    firstName: "Ali",
    lastName: "Omor",
    salary: 20000,
    fullName: () => {
        console.log( this.firstName, this.lastName)
    },
    bill: function (amount){
     balance = this.salary - amount;
      return balance;
    }
}
console.log(richPerson.bill(5000));