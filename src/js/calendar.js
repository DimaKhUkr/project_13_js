import CalendarDates from "calendar-dates";
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

main();

 let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  const prevMonthBtn = document.getElementById("prev-month");
  const nextMonthBtn = document.getElementById("next-month");
  const prevYearBtn = document.getElementById("prev-year");
  const nextYearBtn = document.getElementById("next-year");
  const yearInput = document.getElementById("year-input");
  const currentMonthText = document.getElementById("current-month");
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

  yearInput.addEventListener("input", () => {
    const year = parseInt(yearInput.value);
    if (year >= 1900 && year <= 2100) {
      currentYear = year;
      generateCalendar(currentMonth, currentYear);
    }
  });

  function generateCalendar(month, year) {
    calendarBody.innerHTML = "";

    currentMonthText.innerText = `${monthNames[month]} ${year}`;

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
            cell.innerHTML = `<button class='calendar-date', data-month=${month} data-year=${year}>${date}</button>`
        //   cell.innerText = date;
          if (date === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            cell.classList.add("today");
          }
          date++;
        }
        row.appendChild(cell);
      }
        calendarBody.appendChild(row);
        calendarBody.addEventListener('click', dateLogging)
    }
  }

generateCalendar(currentMonth, currentYear);
  



function dateLogging(event) {
    if (event.target.nodeName === 'BUTTON') {
        const filterDate = new Date(event.target.dataset.year, event.target.dataset.month, event.target.textContent)
        console.log(filterDate.getFullYear(), )
        console.log(`${event.target.textContent}-${Number(event.target.dataset.month) + 1}-${event.target.dataset.year}`)
    } else {
        return;
    }

}

console.log(new Date('2023-03-18'))




async function fetchMostPopularNews() {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date(2023-02-28)&api-key=${API_KEY}`;
  try {
      console.log(await fetch(url, {
          headers: {
              'Content-Type': 'application/json',
          },
      }).then(resp => resp.json()));
  } catch (error) {
    console.error(error);
  }
}


fetchMostPopularNews()
