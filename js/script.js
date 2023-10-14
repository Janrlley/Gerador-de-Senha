// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

var newPassword = "";

let passwordEntered = document.getElementById("password")
let confirmPassword = document.getElementById("confirmpassword")
let messageError = document.getElementById("error-password")
let messageSuccess = document.getElementById("login-successful")

// funções
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
}; 

const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%&*+-_|:;";
  return symbols[Math.floor(Math.random() * symbols.length)];
};


const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
  
  var password = "";

  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ];

  for (i = 0; i < passwordLength; i = i + 4) {
    generators.forEach(() => {
      const randomValue = generators[Math.floor(Math.random() * generators.length)]();
    password += randomValue;
    });
  };
  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
  newPassword = password;
}; 

const copyPassword = () => {
  navigator.clipboard.writeText(newPassword);
  alert("Copiado para a área de transferência!");
};

const validatingPassword = () => {
  if(confirmPassword.value !== passwordEntered.value){
    messageError.style.display = "block";
    messageSuccess.style.display = "none"
  } else {
    messageSuccess.style.display = "block";
    messageError.style.display = "none"
  }
}

// Eventos
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});