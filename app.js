const button = document.querySelector(".arrow");




// REGEX 

let regEx2 = /^[0-9]{2}/;
let regEx4 = /^[0-9]{4}/;

function validateDM(number) {
    if (regEx2.test(number)) {
        return true
    } else {
        return false
    }
}

function validateY(number) {
    if (regEx4.test(number)) {
        return true
    } else {
        return false
    }
}





// YEAR 
const labelYear = document.querySelector("#label-year");
const smallYear = document.querySelector("#small-year");



function CalculYear() {
    if (year.value < 1) {
        year.style.border = "1px solid red";
        labelYear.style.color = "red";
        smallYear.innerHTML = "This field is required"
        return false
    } else if (year.value > 2023) {
        year.style.border = "1px solid red";
        labelYear.style.color = "red";
        smallYear.innerHTML = "Must be in the past";
        return false
    } else if (year.value < 1900) {
        year.style.border = "1px solid red";
        labelYear.style.color = "red";
        smallYear.innerHTML = "Are you so old?";
        return false
    } else if (validateY(year.value) === false) {
        year.style.border = "1px solid red";
        labelYear.style.color = "red";
        smallYear.innerHTML = "Invalid Year";
        return false
    } else {
        year.style.border = "1px solid hsl(0, 1%, 44%)";
        labelYear.style.color = "hsl(0, 1%, 44%)";
        smallYear.innerHTML = "";
        return true
    }
}

year.addEventListener("input", CalculYear);




// MONTH  
const labelMonth = document.querySelector("#label-month");
const smallMonth = document.querySelector("#small-month")

function CalculMonth() {
    if (month.value < 1) {
        month.style.border = "1px solid red";
        labelMonth.style.color = "red";
        smallMonth.innerHTML = "This field is required";
        return false
    } else if (month.value > 12) {
        month.style.border = "1px solid red";
        labelMonth.style.color = "red";
        smallMonth.innerHTML = "Must be a valid month";
        return false
    } else if (((day.value > 28) && (month.value === "02")) ||
        ((day.value > 30) && (month.value === "04")) ||
        ((day.value > 30) && (month.value === "06")) ||
        ((day.value > 30) && (month.value === "09")) ||
        ((day.value > 30) && (month.value === "11"))
    ) {
        day.style.border = "1px solid red";
        month.style.border = "1px solid red";
        year.style.border = "1px solid red";
        labelDay.style.color = "red";
        labelMonth.style.color = "red";
        labelYear.style.color = "red";
        smallDay.innerHTML = "Must be a valid date";
        smallMonth.innerHTML = "";
        return false
    } else if (validateDM(month.value) === false) {
        month.style.border = "1px solid red";
        labelMonth.style.color = "red";
        smallMonth.innerHTML = "Invalid month";
        return false
    } else {
        month.style.border = "1px solid hsl(0, 1%, 44%)";
        labelMonth.style.color = "hsl(0, 1%, 44%)";
        smallMonth.innerHTML = "";
        return true
    }
}

month.addEventListener("input", CalculMonth);




// DAYS 

const labelDay = document.querySelector("#label-day");
const smallDay = document.querySelector("#small-day");


function CalculDay() {
    if (day.value < 1) {
        day.style.border = "1px solid red";
        labelDay.style.color = "red";
        smallDay.innerHTML = "This field is required";
        return false
    } else if (day.value > 31) {
        day.style.border = "1px solid red";
        labelDay.style.color = "red";
        smallDay.innerHTML = "Must be a valid day"
        return false
    } else if (validateDM(day.value) === false) {
        day.style.border = "1px solid red";
        labelDay.style.color = "red";
        smallDay.innerHTML = "Invalid day"
        return false
    } else {
        day.style.border = "1px solid hsl(0, 1%, 44%)";
        labelDay.style.color = "hsl(0, 1%, 44%)";
        smallDay.innerHTML = ""
        return true
    }
}

day.addEventListener("input", CalculDay);




// AGE 

const resultYears = document.querySelector("#result-years");
const resultMonths = document.querySelector("#result-months");
const resultDays = document.querySelector("#result-days");


function age() {
    let d1 = document.getElementById('day').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    
    if ((d1 >= d2) && (m1 >= m2) && (y1 >= y2)) {
        alert("BORN IN THE FUTURE?");
        resultYears.innerHTML = "--";
        resultMonths.innerHTML = "--";
        resultDays.innerHTML = "--";

    } else if (day.value === "" || month.value === "" || year.value === "") {
        resultYears.innerHTML = "--";
        resultMonths.innerHTML = "--";
        resultDays.innerHTML = "--";
    } else if (CalculDay(day.value) === false || CalculMonth(month.value) === false || CalculYear(year.value) === false) {
        resultYears.innerHTML = "--";
        resultMonths.innerHTML = "--";
        resultDays.innerHTML = "--";
    } else {
        if (d1 > d2) {
            d2 = d2 + month[m2 - 1]; 
        }

        if (m1 > m2) {
                m2 = m2 + 12;
                y2 = y2 - 1;
            }
            let d = d2 - d1;
            let m = m2 - m1;
            let y = y2 - y1;
            resultYears.innerHTML = y;
            resultMonths.innerHTML = m;
            resultDays.innerHTML = d
        }
    }





button.addEventListener("click", age);
button.addEventListener("click", CalculYear);
button.addEventListener("click", CalculMonth);
button.addEventListener("click", CalculDay);





