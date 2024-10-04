let score = parseInt(prompt("Enter your score:"));

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80 && score <= 79) {
  consle.log("Good");
} else if (score >= 70 && score <= 79) {
  console.log("Fair");
} else {
  console.log("Need Improvements");
}
