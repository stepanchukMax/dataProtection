let result = document.getElementById("cipher");
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let coefficientInput = document.getElementById("coefficient");
    let k = parseInt(coefficientInput.value);
    let textToEncrypt = document.getElementById("textToEncrypt");
    let text = textToEncrypt.value.toLowerCase();
    let encryptedMessage = caesarCipherEncrypt(text, k)
    result.value = encryptedMessage;
});





function caesarCipherEncrypt(text, shift) {
    let result = '';
    text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/)) {
            char = String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
        }
        result += char.toUpperCase();
    }
    return result;
}