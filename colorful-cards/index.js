
const cards = document.querySelector('.cards').children;
const array_cards = Array.from(cards);

cards[1].style.backgroundColor = "yellow";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGB(){
  let r = getRandomInt(45, 208);
  let g = getRandomInt(45, 208);
  let b = getRandomInt(45, 208);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function colorAssign() {
  array_cards.forEach(card => {
    card.style.background = getRandomRGB();
    card.getElementsByTagName('h3')[0].innerText = ''
  });
}

colorAssign();

setInterval(() => {
  colorAssign()
}, 100);