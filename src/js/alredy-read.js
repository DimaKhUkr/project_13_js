const arr = [];

export function onReadCard(e) {
  let card = null;
  const today = new Date();
  const now = today.toLocaleDateString('en-GB');


  if (e.target.closest('.news-card__read-more')) {
    card = e.target.closest('.news-card');

    if (card) {
      card.classList.add('reading_card');
      card.insertAdjacentHTML('afterbegin', '<p class="text-alredy-read">Already read <svg class="svg-checkmark" width="18" height="18"><use href="./src/svg/checkmark.svg#icon-checkmark"></use></svg></p>');
      // console.log(card)
    }

const categoryEl = card.querySelector('.news-card__category');
const titleEl = card.querySelector('.news-card__title');
const descriptionEl = card.querySelector('.news-card__description')
const dataNewsIdEl = card.querySelector('.news-card__favorite-btn')
const imgEl = card.querySelector('img')
const readMoreEl = card.querySelector('a')

    const cardEl = {
      dateRead: `${now}`,
      id: `${card.id}`,
      img: `${imgEl.src}`,
      category: `${categoryEl.textContent}`,
      title: `${titleEl.textContent}`,
      description:`${descriptionEl.textContent}`,
      dataNewsId: `${dataNewsIdEl.textContent}`,
      readMore: `${readMoreEl.href}`,
    }
    


    // if (arr.includes({cardEl})) {
    //   return;
    // } else {
    //   arr.push(cardEl);
    // }
    arr.push(cardEl);
    // console.log(arr.includes(`${'cardEl'}`))

    //  console.log(arr)
    localStorage.setItem(`${now}`, JSON.stringify(arr));
  }
}


