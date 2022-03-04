// const ${gender}AkanName = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
const maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Get user input frrom the from
const form = document.getElementById("form");

// Listen for a submit event on the form
form.addEventListener('submit', (e) => {
    
    // prevent browser refresh
    e.preventDefault()

    // Get input values from the input fields
    const userName = document.getElementById("name").value;
    const day = document.getElementById("day").value;
    const month_and_year = document.getElementById("month_and_year").value;
    const gender = document.getElementById("gender").value;

    console.log(userName, day, month_and_year, gender)
});