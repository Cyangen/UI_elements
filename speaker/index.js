function speak(id) {
  const message = document.getElementById(id).value;

  let speech = new SpeechSynthesisUtterance();

  //speech.lang = "da-DK";
  speech.lang = "en-US";
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}



// http://www.lingoes.net/en/translator/langcode.html
// https://mdn.github.io/web-speech-api/speak-easy-synthesis/