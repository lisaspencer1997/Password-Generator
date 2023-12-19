// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters
  
// Function to prompt user for password options
function getPasswordOptions() {
   
   // Prompt for password length
   var length = parseInt(prompt("Type the length of characters you want in your password. The password must be between 8 and 128 characters."));
    // At least 8 characters, no more than 128 characters
    // Check if the length is a valid number and within the specified range
    // Conditional to check that the number that was entered is in range
    // Prompts store data as strings, so need to parse into a number
    // If the user's input is out of range, either return out of the function or call the function again
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid number between 8 and 128.");
        return null;
    }
    // Confirm which character sets to use

    var includeSpecialCharacters = confirm("Do you want special characters included?");
    var includeNumericCharacters = confirm("Do you want number characters included?");
    var includeLowerCasedCharacters = confirm("Do you want lower case characters included?");
    var includeUpperCasedCharacters = confirm("Do you want upper case characters included?");
     
    // If the user answers false for all, either return out of the function or call the function again
    if (
        !includeSpecialCharacters &&
        !includeNumericCharacters &&
        !includeLowerCasedCharacters &&
        !includeUpperCasedCharacters
    ) {
        alert("You need at least one character type. Please start again.");
        return null;
    }
    // Once they select a character set:
    // Generate a random character for each selected character set
    // Either push selected character sets to a mega-array of all selected characters
    // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
    
    // Once character sets are selected, move on to generating random characters
    var passwordOptions = {
        length: length,
        includeSpecialCharacters: includeSpecialCharacters,
        includeNumericCharacters: includeNumericCharacters,
        includeLowerCasedCharacters: includeLowerCasedCharacters,
        includeUpperCasedCharacters: includeUpperCasedCharacters
      };
    
      return passwordOptions;

}  
// Function for getting a random element from an array
  function getRandom(arr) {
    // Need a variable to hold the password as it's being generated
    // Need a variable to hold the index that's being generated
    // For loop that loops the number of times that matches the length the user chose
    // Generate a random number
    // That number is the index for a character in the mega-array
    // So then, mega-array[generated-index] is the actual character
    // Add that character to the password
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;
    // Once we finish the for loop, return the generated password
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var options = getPasswordOptions();

    // if the user cancels the prompt or provides the wrong input, return an empty string
    if (!options) {
        return null;
    }

    var possibleCharacters = [];
    var guaranteedCharacters = [];

    if (options.includeSpecialCharacters) {
        possibleCharacters =
        possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

    if (options.includeNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }

    if (options.includeLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }  

    if (options.includeUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }

    var remainingLength = options.length - guaranteedCharacters.length;

    // need a for loop to run through the remaining length

    for (let i = 0; i < remainingLength; i++) {
        const randomChar = getRandom (possibleCharacters);
        guaranteedCharacters (randomChar);
        
    }
  
    var password = guaranteedCharacters

    return password;


  }


  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);