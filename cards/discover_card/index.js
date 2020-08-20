
function panel(){
  let cardPanel = document.querySelector(".card_panel");

  console.log(cardPanel.style.maxWidth)
  
  if (cardPanel.style.maxWidth) {
    cardPanel.style.maxWidth = null;
  } else {
    cardPanel.style.maxWidth = cardPanel.scrollWidth + "rem";
  }

}

function panel2(){
  let card = document.querySelector(".card");
  let wideCard = document.querySelector(".wide_card");

  //card.style.width = "40rem";
  wideCard.style.opacity = "1";
  wideCard.style.width = "21rem";

  

  


}