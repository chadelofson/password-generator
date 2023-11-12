const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")


function generatePassword() {
    let passwordLength = 15;
    let password1 = ''
    let password2 = ''
    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordEl1.textContent = password1
    passwordEl2.textContent = password2
}

async function copyPassword(target) {
  try {        
    console.log(target.textContent)
    await navigator.clipboard.writeText(target.textContent)
  } catch(err) {
    console.log('Failed to copy password')
    console.log("Error: " + err)
  }
}
