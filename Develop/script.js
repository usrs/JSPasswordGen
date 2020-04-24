// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare functions
const lowerChar = 'abcdefghijklmnopqrstuvwxyz'
const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChar = '1234567890'
const specialChar = '!@^?~*/'

//function that generates passwords based on user inputs
function generatePassword() {
  const passLength = parseInt(prompt('How long should your password be?'))

  if (passLength < 8 || passLength > 128) {
    alert('please pick a length between 8 and 128 characters.')
    generatePassword()
  }
  
  const lowC = confirm('do you want lowercase characters?')
  const upC = confirm('do you want uppercase characters?')
  const numC = +confirm('do you want numbers?')
  const specC = confirm('do you want special characters?')
  let passHolder = ''
  newPass = ''
  if (lowC){
    passHolder += lowerChar;
  }
  if (upC) {
    passHolder += upperChar;
  }
  if (numC) {
    passHolder += numberChar;
  }
  if (specC) {
    passHolder += specialChar;
  }
  if (!lowC && !upC && !numC && !specC) {
    alert('you need to choose at least one character set.')
    generatePassword()
  }

  for (let i=0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * passHolder.length)
    newPass += passHolder[randomIndex]
  }
  return newPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
