
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
  let wideCard = document.querySelector(".wide_card");

  if (wideCard.style.width) {
    wideCard.style.opacity = "0";
    wideCard.style.width = null;
  } else {
    wideCard.style.opacity = "1";
    wideCard.style.width = wideCard.style.width + "21rem";
  }
}