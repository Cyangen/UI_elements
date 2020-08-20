
function panel(){
  let cardPanel = document.querySelector(".card_panel");

  console.log(cardPanel.style.maxWidth)
  
  if (cardPanel.style.maxWidth) {
    cardPanel.style.maxWidth = null;
  } else {
    cardPanel.style.maxWidth = cardPanel.scrollWidth + "rem";
  }

}
