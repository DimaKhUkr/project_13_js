export default function onReadCard(e){
  let card = null;
 const today = new Date();
 const now = today.toLocaleDateString('en-GB');
   
 if (e.target.closest('.news-card__read-more')){
  
  card = e.target.closest('.news-card')
   
   if (card){  
     card.classList.add('reading_card')
   }

   if (arr.includes(`${card.id}`)){
    return}
    else{arr.push(`${card.id}`)}

    //  console.log(arr)
   localStorage.setItem(`${now}`, JSON.stringify(arr));}
  }