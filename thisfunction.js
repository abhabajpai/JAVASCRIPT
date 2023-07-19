//this keyword
//in each method we have an access of speacial keyword called "this"
//"this " keyword represent the object."calling " the "method" in which "this " is present
//example
let person={
    firstName: "harry",
    lastName :"Brook",
    city :"delhi",
    getSummary: function(){
    return this.firstName +" "+this.lastName;
    }
} 
console.log(person.getSummary());