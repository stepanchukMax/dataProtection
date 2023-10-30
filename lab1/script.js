// Get the HTML element with the id "cipher" to display the encrypted message.
let result = document.getElementById("cipher");

// Get the HTML element with the id "submit-button" to listen for the click event.
let submitButton = document.getElementById("submit-button");

// Add a click event listener to the "submit" button.
submitButton.addEventListener("click", function(event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Get the value of the input element with the id "coefficient," which represents the Caesar cipher shift value (k).
    let coefficientInput = document.getElementById("coefficient");
    let k = parseInt(coefficientInput.value); // Convert the shift value to an integer.

    // Get the value of the input element with the id "textToEncrypt," which contains the plaintext to be encrypted.
    let textToEncrypt = document.getElementById("textToEncrypt");

    // Convert the plaintext to lowercase to ensure consistency.
    let text = textToEncrypt.value.toLowerCase();

    // Call the caesarCipherEncrypt function to encrypt the text with the provided shift value (k).
    let encryptedMessage = caesarCipherEncrypt(text, k);

    // Set the value of the "cipher" input element to display the encrypted message.
    result.value = encryptedMessage;
});

// Define the caesarCipherEncrypt function, which takes the plaintext and the shift value as arguments.
function caesarCipherEncrypt(text, shift) {
    let result = ''; // Initialize an empty string to store the encrypted message.

    text.toLowerCase(); // Ensure that the input text is in lowercase.

    // Iterate through each character in the plaintext.
    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // Get the current character.

        // Check if the character is a lowercase letter (a-z).
        if (char.match(/[a-z]/)) {
            // Apply the Caesar cipher shift to the character and convert it back to a character code.
            char = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        }

        // Convert the character to uppercase and append it to the result string.
        result += char.toUpperCase();
    }

    // Return the encrypted message.
    return result;
}