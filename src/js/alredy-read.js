export function onReadCard(e) {
  let card = null;

  const today = new Date();
  const now = today.toLocaleDateString('en-GB');
  const STORAGE_KEY = `read_news_${now}`;
  console.log(STORAGE_KEY)


  if (e.target.closest('.news-card__read-more')) {
    card = e.target.closest('.news-card');

    if (card) {
      card.classList.add('reading_card');
      card.insertAdjacentHTML('afterbegin', '<p class="text-alredy-read">Already read</p>');
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
  
 
      const currentData = loadFromStorage(STORAGE_KEY);
      if (currentData === undefined) {
        saveToStorage(STORAGE_KEY, [cardEl]);
      } else {
        currentData.push(cardEl);
        saveToStorage(STORAGE_KEY, currentData);
      }
    

    function saveToStorage(key, value) {
      try {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
      } catch (error) {
        console.error(error);
      }
    }
  
    function loadFromStorage(key) {
      try {
        const localData = localStorage.getItem(key);
        return localData === null ? undefined : JSON.parse(localData);
      } catch (error) {
        console.error(error);
      }
    }
  }
}