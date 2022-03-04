// const ${gender}AkanName = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
const maleAkanName = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleAkanName = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Get user input frrom the from
const form = document.getElementById("form");

// Listen for a submit event on the form
form.addEventListener("submit", (e) => {
  // prevent browser refresh
  e.preventDefault();

  // Get input values from the input fields
  const userName = document.getElementById("name").value;
  const day = document.getElementById("day").value;
  const month_and_year = document.getElementById("month_and_year").value;
  const gender = document.getElementById("gender").value;
  const openModal = document.getElementById("open-modal");
    const closeModal = document.getElementById("close-modal");
    const akanInModal = document.getElementById("akan-name-modal");
    const revealDay = document.getElementById("reveal-day")

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

    // Now apply the formula
    //  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
      const male_day_of_week =
          (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + day) % 7;
      
    // Convert negative numbers to positive
      const malePositive = Math.abs(Math.round(male_day_of_week));
     
      console.log(maleAkanName[malePositive]);
      akanInModal.textContent = maleAkanName[malePositive];
      revealDay.textContent = `This is probably because you were born on a ${weekDays[malePositive]}`
    openModal.classList.toggle("show");
  }

  // If user is male this function will be exectute
  function getFemaleAkanName() {
    // Number() is used to change the type of data to int. parseInt() doesn't
    // Slice() is used to get segments of the date received
    const CC = Number(month_and_year.slice(0, 2));
    const YY = Number(month_and_year.slice(2, 4));
    const MM = Number(month_and_year.slice(5));

    // Now apply the formula
    //  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    const female_day_of_week =
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + day) % 7;

    // Convert negative numbers to positive
      const femalePositive = Math.abs(Math.round(female_day_of_week));
      
      console.log(femaleAkanName[femalePositive]);
      akanInModal.textContent = femaleAkanName[femalePositive];
      revealDay.textContent = `This is probably because you were born on a ${weekDays[femalePositive]}`;
      openModal.classList.toggle("show");
  }
    
    closeModal.addEventListener('click', () => {
        openModal.classList.remove('show')
    })
});
