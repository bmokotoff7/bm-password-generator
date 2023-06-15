const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
                    "+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

let passwordLength = 15

function generatePasswords() {
    let password1 = ""
    for (let i = 0; i <= passwordLength; i++) {
        let randomInt = Math.floor(Math.random() * characters.length)
        password1 += characters[randomInt]
    }
    let password2 = ""
    for (let i = 0; i <= passwordLength; i++) {
        let randomInt = Math.floor(Math.random() * characters.length)
        password2 += characters[randomInt]
    }
    password1El.textContent = password1
    password2El.textContent = password2
}
