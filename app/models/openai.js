const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: "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"
});

const openai = new OpenAIApi(config);

const runPrompts = async () => {
  const prompt = "Give me either TRUE or FALSE wether this post is real or fake newsIt is sad to see the community being harmed by the second wave of COVID-19. I am trying to help the community by providing dails meals during this epidemic. Please share this with your friends and family. Support in any form towards this cause is appreciated.";

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  })

  console.log(response.data.choices)
}

