const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
  };
  console.log(person);
  console.log(person.age);//accesing object properties

