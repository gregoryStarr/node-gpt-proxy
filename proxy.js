const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace this with your actual OpenAI API key
const OPENAI_API_KEY = 'your-openai-api-key-here';

app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    // Extract the prompt from the incoming request
    const { prompt } = req.body;

    // Make a request to the ChatGPT API
    const chatGptResponse = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Send the ChatGPT API response back to the client
    res.json(chatGptResponse.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
