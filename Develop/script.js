// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Defining arrays
  const upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const specialArr = ["!", "@", "#", "$", "%", "&"]

  var userLength =prompt("Enter password length between 8-128 characters.")

  if (userLength < 8 || userLength > 128) {
    console.clear(userLength);
    alert("Password is not the right length");
    generatePassword();
  } else {
    console.log(userLength);
  }

  var upperCase = confirm("Would you like upper case?");
  var lowerCase = confirm("Would you like lower case?");
  var numbers = confirm("Would you like numbers?");
  var special = confirm("Would you like special characters?");

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
