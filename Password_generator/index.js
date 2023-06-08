const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"];

let passwordOneEl = document.querySelector("#password-one");
let passwordTwoEl = document.querySelector("#password-two");

let password;

function generate()
{   
    passwordOneEl.textContent = createPassword();
    passwordTwoEl.textContent = createPassword();
}

function createPassword()
{
    password = "";
    for(let i = 0; i < 15; i++)
    {
        password += characters[randomNum(characters)];
    }
    console.log(password);
    return password;
}

function randomNum()
{
    return Math.floor(Math.random() * characters.length)
}

function copyText(id)
{   console.log(id)
    let passwordEl = id;
    let passwordText = passwordEl.textContent;

    navigator.clipboard.writeText(passwordText);

    alert("Copied to clipboard");
}