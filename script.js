const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
                    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let uppercaseCheckboxEl = document.getElementById("uppercase-cb")
let lowercaseCheckboxEl = document.getElementById("lowercase-cb")
let numbersCheckboxEl = document.getElementById("numbers-cb")
let symbolsCheckboxEl = document.getElementById("symbols-cb")
let passwordLengthEl = document.getElementById("length-input")
let generatePasswordBtnEl = document.getElementById("generate-password-btn")
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

function generatePasswords() {
    // determine available characters
    let availableCharacters = []
    if (uppercaseCheckboxEl.checked) {
        for (let i = 0; i < uppercaseLetters.length; i++) {
            availableCharacters += uppercaseLetters[i]
        }
    }
    if (lowercaseCheckboxEl.checked) {
        for (let i = 0; i < lowercaseLetters.length; i++) {
            availableCharacters += lowercaseLetters[i]
        }
    }
    if (numbersCheckboxEl.checked) {
        for (let i = 0; i < numbers.length; i++) {
            availableCharacters += numbers[i]
        }
    }
    if (symbolsCheckboxEl.checked) {
        for (let i = 0; i < symbols.length; i++) {
            availableCharacters += symbols[i]
        }
    }
    // generate both passwords
    if (availableCharacters.length > 0) {
        let password1 = ""
        for (let i = 0; i < passwordLengthEl.value; i++) {
            let randomInt = Math.floor(Math.random() * availableCharacters.length)
            password1 += availableCharacters[randomInt]
        }
        let password2 = ""
        for (let i = 0; i < passwordLengthEl.value; i++) {
            let randomInt = Math.floor(Math.random() * availableCharacters.length)
            password2 += availableCharacters[randomInt]
        }
        // display passwords to user
        password1El.textContent = password1
        password2El.textContent = password2
    }
}

// Styles the generate password button depending on checkbox states
function styleGenerateBtn() {
    if (!uppercaseCheckboxEl.checked &&
        !lowercaseCheckboxEl.checked &&
        !numbersCheckboxEl.checked &&
        !symbolsCheckboxEl.checked) {
            generatePasswordBtnEl.style.background = "#2F3E53"
    }
    else {
        generatePasswordBtnEl.style.background = "#10B981"
    }
}