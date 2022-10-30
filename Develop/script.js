// Assignment Code
const upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const specialArr = ["!", "@", "#", "$", "%", "&"]
var userArray = []

function generatePassword() {
  var userLength =prompt("Enter password length between 8-128 characters.")

  if (userLength < 8 || userLength > 128) {
    alert("Password is not the right length");
    console.clear(userLength);
    generatePassword();
  }
  
  if (userLength >= 8 && userLength <= 128) {
    var upperCase = confirm("Would you like upper case?");
    var lowerCase = confirm("Would you like lower case?");
    var numbers = confirm("Would you like numbers?");
    var special = confirm("Would you like special characters?");

    if (upperCase = true){
      userArray = userArray.concat(upperCaseArr);
    }
    if (lowerCase = true){
      userArray = userArray.concat(lowerCaseArr);
    }
    if (numbers = true){
      userArray = userArray.concat(numbersArr);
    }
    if (special = true){
      userArray = userArray.concat(specialArr);
    }
    console.log(userArray)

    var finalPassword = []
    for (let i = 0; i <= userLength; i++) {
      var randomIndex = Math.floor(Math.random() * userArray.length);
      console.log(randomIndex);
      finalPassword = finalPassword.concat(userArray[randomIndex])
      console.log(finalPassword)
    }
    finalPassword = finalPassword.join("");
    console.log(finalPassword);
    return finalPassword;
  }
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
