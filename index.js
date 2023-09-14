const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstText = document.getElementById("first-text-el");
let secondText = document.getElementById("second-text-el");
let passwordLength = 15;

function generateRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++){
        randomPassword += generateRandomCharacter();
    }
    return randomPassword;
}

function submit() {
    let input = document.getElementById("password-length").value;
    passwordLength = input;
}


function generateBtn() {
    let first = generateRandomPassword();
    let second = generateRandomPassword()
    firstText.textContent = first;
    secondText.textContent = second;
}








