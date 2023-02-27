const API_KEY = `u59IF6VhLyuj5qt5wMVcLGGSUKapZTsn`;
const URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json`;

const categoryBtn = document.getElementById('category-btn');

export async function getCategories() {
  try {
    return await fetch(`${URL}?api-key=${API_KEY}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      //   .then(cat => console.log(cat.results));
      .then(cat => {
        const arrayOfCategories = [];
        for (const arr of cat.results) {
          arrayOfCategories.push(arr.display_name);
        }
        console.log(arrayOfCategories);
        return arrayOfCategories;
      })
      .then(arrayOfCategories => {
        // for (const arrbtn of arrayOfCategories) {
        for (let i = 0; i <= 5; i++) {
          categoryBtn.insertAdjacentHTML(
            'beforeend',
            `<button type="button" class="category_btn">${arrayOfCategories[i]}</button>`
          );
        }
        categoryBtn.insertAdjacentHTML(
          'beforeend',
          `<select name="Others" class="category_btn select_btn">
            <option value="Others" hidden>Others</option>
            </select>`
        );
        const selectBtn = document.querySelector('.select_btn');
        for (let i = 6; i < arrayOfCategories.length; i++) {
          selectBtn.insertAdjacentHTML(
            'beforeend',
            `<option value="${arrayOfCategories[i]}">${arrayOfCategories[i]}</option>`
          );
        }
      });
  } catch (error) {
    console.error(error);
  }
}
