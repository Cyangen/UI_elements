let sentences = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
];

let part = 0;
let part_index = 0;
let interval_instance;

let el = document.querySelector(".change");

function write() {
  //take one letter from array element and push it to 'el' every setInterval(write, 85) call
  let text = sentences[part].substring(0, part_index + 1);
  el.innerHTML = text;
  part_index++;

  // if the sentence is all displayed, clear write interval and call erase interval after 1 second
  if(text === sentences[part]){
    clearInterval(interval_instance);
    setTimeout(function(){
      interval_instance = setInterval(erase, 25);
    }, 1000)
  }
};

function erase() {
  let text = sentences[part].substring(0, part_index - 1);
  el.innerHTML = text;
  part_index--;

  if(text === ''){
    clearInterval(interval_instance);

    if(part == (sentences.length - 1)){
      part = 0;
    }
    else {
      part++;
      part_index = 0;
    }

    setTimeout(function(){
      interval_instance = setInterval(write, 85);
    }, 400);
  }
};

interval_instance = setInterval(write, 85);
