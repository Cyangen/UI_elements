class SentencesService {

  sentences =
  [
    {
      lang: 'en',
      originContent: 'hello world',
      translation: 'ciao mondo',
      category: 'sentence'
    },
    {
      lang: 'en',
      originContent: 'take a good look at the phrases, try to memorise them',
      translation: 'osservate bene le frasi, cercate di memorizzarle',
      category: 'sentence'
    },
  ];

  getCategories() {
    return this.sentences.map(obj => obj.category).filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  }

}