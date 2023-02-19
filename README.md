# Epic Rap Battles of GPT

[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Description

This project is a web application that uses the GPT-3 API and the Web Speech API to create a freestyle rap battle game. Users can input the names of two different famous figures, such as Elon Musk and Steve Jobs, and then the application generates two unique rap verses for each of them using the GPT-3 API. The Web Speech API then reads out the verses, and the user can decide which freestyler wins the battle. The project is built using React and Node.js.

## Features

- User input for freestylers
- GPT-3 API integration for generating unique rap verses
- Web Speech API integration for reading the rap verses out loud
- User interface for voting on which freestyler wins the battle

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`
4. Create a `.env` file and add the following variables:
   - `REACT_APP_GPT3_API_KEY` : Your GPT-3 API key
   - `REACT_APP_GPT3_API_URL` : The URL of the GPT-3 API
   - `REACT_APP_CX` : Your Google Custom Search Engine ID
   - `REACT_APP_CSE_API_KEY` : Your Google CSE API key
5. Run `npm start`

## Usage

1. Enter the names of the two freestylers
2. Click the "Generate Verses" button to generate unique rap verses for each freestyler
3. Click the "Battle" button to have the Web Speech API read out the verses
4. Vote for the winner of the freestyle battle

## Credits

- [OpenAI](https://openai.com/) for providing the GPT-3 API
- [Google Custom Search API](https://developers.google.com/custom-search/v1/overview) for providing the image search
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) for providing text-to-speech functionality

## License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
