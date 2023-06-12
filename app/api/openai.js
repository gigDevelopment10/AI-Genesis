// const { Configuration, OpenAIApi } = require('openai');
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
  apiKey: "API_KEY"
});

const openai = new OpenAIApi(config);

const runPrompts = async (str) => {
  const prompt = str;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: str,
  })
  return response.data.choices[0].text.trim();
}

export default async function openAI(prompt) {
    try {
        const verified_status = await runPrompts(prompt);
        return { verified_status};
      } catch (error) {
        console.error(error);
        return "error";
      }
}