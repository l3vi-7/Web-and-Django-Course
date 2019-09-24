var firstName = prompt("Enter First Name: ")
var lastName = prompt("Enter Last Name: ")
var age = prompt("Enter Age: ")
var height = prompt("How tall are you? ")
var pet = prompt("What is your pet's name? ")

if (firstName[0] == lastName[0] && age > 20 && age <30 && height >= 170 && pet[pet.length - 1] === "y") {
  console.log("Comrade! You have passed the test.");
}else {
  console.log("Sorry. There is nothing here.");
}
