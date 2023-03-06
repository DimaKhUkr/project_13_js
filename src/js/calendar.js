import CalendarDates from "calendar-dates";
import { createMainPage } from "./sendrequest";
const calendarDates = new CalendarDates();

const API_KEY = '0SWUSAFpResVVsgDj4WVB8nArvrOLEeJ';

const main = async () => {
  for (const meta of await calendarDates.getDates(new Date())) {
    console.log(meta);
  }

  for (const meta of await calendarDates.getMatrix(new Date())) {
    console.log(meta);
  }
};

// main();


const calendarBtnOpen = document.querySelector('.calendar-button')
const calendarContainer = document.querySelector('.calendar-container')
 let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  const monthNames = ["January", "February", "March", "April", "May", "Juny", "July", "August", "September", "October", "November", "December"];

  const prevMonthBtn = document.getElementById("prev-month");
  const nextMonthBtn = document.getElementById("next-month");
  const prevYearBtn = document.getElementById("prev-year");
  const nextYearBtn = document.getElementById("next-year");
const currentMonthText = document.getElementById("current-month");
    const currentYearText = document.getElementById("current-year");
    const calendarBody = document.getElementById("calendar-body");

  prevMonthBtn.addEventListener("click", () => {
    currentMonth -= 1;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear -= 1;
    }
    generateCalendar(currentMonth, currentYear);
  });

  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  });

  prevYearBtn.addEventListener("click", () => {
    currentYear -= 1; 
    generateCalendar(currentMonth, currentYear);
  });

  nextYearBtn.addEventListener("click", () => {
    currentYear++;
    generateCalendar(currentMonth, currentYear);
  });


  function generateCalendar(month, year) {
    calendarBody.innerHTML = "";

    currentMonthText.innerText = `${monthNames[month]}`;
    currentYearText.innerText = `${year}`;

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
          const cell = document.createElement("td");
        if (i === 0 && j < firstDayOfMonth) {
          cell.classList.add("empty-cell");
        } else if (date > lastDateOfMonth) {
          cell.classList.add("empty-cell");
        } else {
            cell.innerHTML = `<button class='calendar-date', data-month=${month} data-year=${year}>${String(date).padStart(2, '0')}</button>`
        //   cell.innerText = date;
            if (date === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            cell.firstChild.classList.add("today");
          }
          date++;
        }
        row.appendChild(cell);
      }
        calendarBody.appendChild(row);
    }
  }

generateCalendar(currentMonth, currentYear);
  



function dateLogging(event) {
  if (event.target.nodeName === 'BUTTON') {
    calendarContainer.classList.add('hidden')
    calendarBtnOpen.textContent = `${event.target.textContent}/${String(Number(event.target.dataset.month) + 1).padStart(2, 0)}/${event.target.dataset.year}`
      const filterDate = `${event.target.dataset.year}-${Number(event.target.dataset.month) + 1}-${event.target.textContent}`
      createMainPage(0, filterDate)
    } else {
        return;
    }

}



calendarBtnOpen.textContent = `${String(new Date().getDate()).padStart(2, 0)}/${String(Number(new Date().getMonth()) + 1).padStart(2, 0)}/${new Date().getFullYear()}`
calendarBtnOpen.addEventListener('click', calendarToggle)

function calendarToggle() {
    calendarContainer.classList.toggle('hidden')
    if (!calendarContainer.classList.contains('hidden')) {
        calendarBody.addEventListener('click', dateLogging)
    } else {
        calendarBody.removeEventListener('click', dateLogging)
    }
    

}