const OpenAI = require("openai");
require("dotenv").config();

const vagueReplies = [
  "not sure",
  "just looking",
  "idk",
  "later",
  "maybe",
  "nothing",
  "no idea",
  "don't know"
];

function isVague(text) {
  return vagueReplies.some(phrase => text.toLowerCase().includes(phrase));
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});

async function simulateChat(lead, config) {
  const messages = [
    {
      role: "system",
      content:
        "You are a friendly and empathetic sales assistant. Ask relevant, kind questions to qualify the lead. Keep it natural and helpful."
    },
    {
      role: "user",
      content: `Lead Info: Name: ${lead.name}, Source: ${lead.source}, Message: ${lead.message || "N/A"}`
    }
  ];

  for (let question of config.questions) {
    messages.push({ role: "assistant", content: question });

    const response = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages
    });

    const reply = response.choices[0].message.content;
    messages.push({ role: "user", content: reply });

    if (isVague(reply)) {
      messages.push({
        role: "assistant",
        content:
          "No problem! I’m here whenever you’re ready. Would you like me to connect you with a human expert instead?"
      });
      break;
    }
  }

  return messages;
}

module.exports = { simulateChat };
