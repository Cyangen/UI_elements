function speak(id) {
  const message = document.getElementById(id).value;
  const container = document.querySelector('.container');

  let speech = new SpeechSynthesisUtterance();

  //speech.lang = "da-DK";
  speech.lang = "en-US";
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  container.style.backgroundPosition = "left bottom";

  setTimeout(() => {
    container.style.backgroundPosition = "right bottom";
  },2000)

  window.speechSynthesis.speak(speech);

}



// http://www.lingoes.net/en/translator/langcode.html
// https://mdn.github.io/web-speech-api/speak-easy-synthesis/



/* 

  setTimeout(() => {
    container.style.backgroundPosition = "right bottom";
  },1)

*/