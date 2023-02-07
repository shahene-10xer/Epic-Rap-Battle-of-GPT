const axios = require("axios");

const GenerateRap = () => {
const apiKey = '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'

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
    console.log(`${result.data.choices[0].text}`);
  })
  .catch((err) => {
    console.log(err);
  });
}

export default GenerateRap