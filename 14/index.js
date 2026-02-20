var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your age is " + age);
document.write("Your birth year is " + birthYear);