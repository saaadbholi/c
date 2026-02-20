function addNumbers(num1, num2) {
    return num1 + num2;
}
var firstInput = Number(prompt("Enter the first number:"));
var secondInput = Number(prompt("Enter the second number:"));
var result = addNumbers(firstInput, secondInput);
alert("The sum is: " + result);
