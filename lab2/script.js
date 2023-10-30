let result = document.getElementById("cipher");
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let coefficientInput = document.getElementById("coefficient");
    let k = parseInt(coefficientInput.value);
    let textToEncrypt = document.getElementById("textToEncrypt");
    let text = textToEncrypt.value.toLowerCase();
    let encryptedMessage = permutatiomCipherTechnic(text, k);
    result.value = encryptedMessage;
});

function permutatiomCipherTechnic(text, shift) {
    let result = [];
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (text[i].match(/[a-z]/)) {
            let newIndex = (i + (shift)) % text.length;
            result.push(text[newIndex].toUpperCase());
        }

    }


    return result.join('');
}