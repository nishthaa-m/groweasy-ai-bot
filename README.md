# GrowEasy AI Lead Qualification Bot

A simulated WhatsApp-style chatbot that automatically qualifies leads using AI. Fully configurable for multiple industries like real estate, education, etc.

---

## 💡 Features

- Simulated AI chat to qualify leads
- Classifies leads as Hot, Cold, or Invalid
- Configurable questions per industry
- Smart fallback for vague or no responses
- Friendly and empathetic AI assistant
- JSON output with chat + classification

---

## 🧰 Tech Stack

- Node.js + Express
- OpenRouter (GPT-compatible LLMs)
- dotenv for secure API key
- JSON for configs and storage

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/groweasy-ai-bot.git
cd groweasy-ai-bot
npm install

### 2. Add Environment Variables

Create a file named `.env` in the root directory of the project:

```env
OPENAI_API_KEY=your_openrouter_api_key
PORT=3000
