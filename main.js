// const ${gender}AkanName = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
const maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Get user input frrom the from
const form = document.getElementById("form");

// Listen for a submit event on the form
form.addEventListener('submit', (e) => {
  // prevent browser refresh
  e.preventDefault();

  // Get input values from the input fields
  const userName = document.getElementById("name").value;
  const day = document.getElementById("day").value;
  const month_and_year = document.getElementById("month_and_year").value;
  const gender = document.getElementById("gender").value;

  /*
    Formula To Calculate Day of The Week
    Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

    where;
    CC - is the century digits. For example 1989 has CC = 19
    YY - is the Year digits (1989 has YY = 89)
    MM -  is the Month
    DD - is the Day of the month
    mod - is the modulus function ( % )
    */

  // Process name by gender
  if (gender == "male") {
    getMaleAkanName();
  } else if (gender == "female") {
    getFemaleAkanName();
  }

  // If user is male this function will be exectuted
  function getMaleAkanName() {
    // Number() is used to change the type of data to int. parseInt() doesn't
    // Slice() is used to get segments of the date received
    const CC = Number(month_and_year.slice(0, 2));
    const YY = Number(month_and_year.slice(2, 4));
    const MM = Number(month_and_year.slice(5));
    console.log(userName);
  }

  // If user is male this function will be exectute
    function getFemaleAkanName() {
      // Number() is used to change the type of data to int. parseInt() doesn't
      // Slice() is used to get segments of the date received
      const CC = Number(month_and_year.slice(0, 2));
      const YY = Number(month_and_year.slice(2, 4));
      const MM = Number(month_and_year.slice(5));
      console.log(userName);
    }
});