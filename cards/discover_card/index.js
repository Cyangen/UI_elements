
function panel(){
  let cardPanel = document.querySelector(".card_panel");
  
  if (cardPanel.style.display === "inline-block") {
    cardPanel.style.display = "none";
  } else {
    cardPanel.style.display = "inline-block";
  }
  if (cardPanel.style.maxWidth){
    cardPanel.style.maxWidth = null;
  } else {
    cardPanel.style.maxWidth = cardPanel.scrollWidth + "rem";
  }
}
