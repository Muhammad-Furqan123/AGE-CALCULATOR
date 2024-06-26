let userInput = prompt("When were you born (YYYY-MM-DD)?");

if (!userInput) {
  alert("Please enter your date of birth.");
} else {
    let birthDate = new Date(userInput);
    if (isNaN(birthDate.getTime())) {
        alert("Invalid date format. Please enter your date of birth in YYYY-MM-DD format.");
    } else {
        let today = new Date();
        let ageInMilliseconds = today.getTime() - birthDate.getTime();
        let ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        alert(`You are approximately ${ageInYears} years old.`);
    }
}
