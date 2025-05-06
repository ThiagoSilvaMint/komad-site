const spanYears = document.getElementById("years");
const currentYear = new Date().getYear() + 1900;
const komadYears = currentYear - 2017

spanYears.innerHTML = komadYears

