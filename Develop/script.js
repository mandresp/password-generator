// Assignment Code

// Assigning array values
const upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const specialArr = ["!", "@", "#", "$", "%", "&"]
var userArray = []

// This is the function to create the password
function generatePassword() {
  // An intial prompt for choosing password length
  var userLength =prompt("Enter password length between 8-128 characters.")

  // This if statement will redirect to the beginning if the password length is incorrect
  if (userLength < 8 || userLength > 128) {
    alert("Password is not the right length");
    console.clear(userLength);
    return ""
  }
  
  // This is the else when your chosen number meets the parameters
  else {
    // Each of these confirms adds the desired values to our user array
    var upperCase = confirm("Would you like upper case?");
    console.log(upperCase);
    var lowerCase = confirm("Would you like lower case?");
    console.log(lowerCase);
    var numbers = confirm("Would you like numbers?");
    console.log(numbers);
    var special = confirm("Would you like special characters?");
    console.log(special);

    // This is a failsafe if no character types are selected
    if (upperCase === false && lowerCase === false && numbers === false &&  special === false) {
      alert("No character types selected");
      console.clear(userLength);
      return " "
    }

    // These ifs check the boolean value of the confirms above and add the character type to the array if they are true
    if (upperCase === true) {
      userArray = userArray.concat(upperCaseArr)
    }

    if (lowerCase === true){
      userArray = userArray.concat(lowerCaseArr);
    }

    if (numbers === true){
      userArray = userArray.concat(numbersArr);
    }

    if (special === true){
      userArray = userArray.concat(specialArr);
    }

    console.log(userArray)

    var finalPassword = []

    // This is the for statement which selectes a random character from the array for however many units the chosen userLength is
    for (let i = 0; i <= userLength; i++) {
      var randomIndex = Math.floor(Math.random() * userArray.length);
      console.log(randomIndex);
      finalPassword = finalPassword.concat(userArray[randomIndex])
      console.log(finalPassword)
    }

    // This code joins the final password so that it appears as a string
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
