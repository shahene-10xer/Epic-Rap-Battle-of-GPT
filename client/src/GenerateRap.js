const axios = require("axios");
const GenerateRap = () => {
const apiKey = process.env.REACT_APP_OPEN_API_KEY
const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
  },
});
const firstFreestyler = document.getElementById("firstFreestyler").value;
const secondFreestyler = document.getElementById("secondFreestyler").value;

const params = {
  prompt:  `${firstFreestyler} vs ${secondFreestyler} freestyle rap`,
  model: "text-davinci-003",
  max_tokens: 800,
  temperature: 0.4,
};

client
  .post("https://api.openai.com/v1/completions", params)
  .then((result) => {
    console.log(result.data.choices[0].text)
    document.getElementById('text').textContent = result.data.choices[0].text;
    const utterance = new SpeechSynthesisUtterance(document.getElementById('text').textContent);
    utterance.lang = 'en-US'; // set the language of the voice
    speechSynthesis.speak(utterance); // initiate the speech synthesis request
    document.getElementById('text').innerHTML = 'Les get it!!'
  })
  .catch((err) => {
    console.log(err);
  });
}


export default GenerateRap