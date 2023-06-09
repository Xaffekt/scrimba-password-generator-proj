const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"];

let passwordOneEl = document.querySelector("#password-one");
let passwordTwoEl = document.querySelector("#password-two");

let password;

/* Runs every time generate password button is clicked */
function generate()
{   
    passwordOneEl.textContent = createPassword();
    passwordTwoEl.textContent = createPassword();
}

function createPassword()
{
    password = "";
    for(let i = 0; i < 15; i++) //change this if you are going to add custom password length,  i < number user chooses(the question is how to do this, current idea is to have a counter with + and - and then use that input to set length)
    {
        password += characters[randomArrayIndex(characters)];
    }
    console.log(password);
    return password;
}

function randomArrayIndex(array)
{
    let length = array.length;
    return Math.floor(Math.random() * length)
}

function copyText(id)
{   
    console.log(id) //tests to see how it grabs the html element
    let passwordText = id.textContent; //grabs the text inside the button

    navigator.clipboard.writeText(passwordText); //copies text to clipboard

    alert("Copied to clipboard");
}