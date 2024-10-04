let correctPassword = "AUREOPOGI46";

let password;
do {
  password = prompt("Enter your password:");
} while (password !== correctPassword);
console.log("Acces granted");