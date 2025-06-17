
# GrowEasy AI Lead Qualification Bot

A simulated AI chatbot that automatically qualifies incoming leads using smart conversations and GPT-style models via OpenRouter. Built as a backend API with pluggable industry configs and lead classification.

---

## 🚀 Features

- 🧠 Simulated AI chat to qualify leads
- 🔥 Classifies leads as Hot, Cold, or Invalid
- ⚙️ Industry-agnostic plugin config (real estate, education, etc.)
- 🗣️ Empathetic, natural responses
- 🛡️ Smart fallback for vague or unresponsive users
- 💾 Chat transcript + classification saved as JSON
- 📡 Postman- and curl-friendly API

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **OpenRouter** (for free GPT-compatible LLMs)
- JSON for config and file storage
- dotenv for environment variables
- Postman or curl for testing

---

## 📦 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/groweasy-ai-bot.git
cd groweasy-ai-bot
npm install
```

### 2. Add Environment Variables

Create a file named `.env` in the root directory of the project.

Paste the following inside:

```
OPENAI_API_KEY=your_openrouter_api_key
PORT=3000
```

> 💡 Replace `your_openrouter_api_key` with the key from https://openrouter.ai/keys

### 3. Start the Server

```bash
npx nodemon src/index.js
```

If successful, you’ll see:
```
✅ Server running at http://localhost:3000
```

---

## 🧪 Testing the API

Use **Postman**, **curl**, or any HTTP client to test the chatbot API.

### 🔹 Endpoint
```
POST http://localhost:3000/lead
```

### 🔹 Sample Request Body

```json
{
  "name": "Rohit Sharma",
  "source": "Website",
  "message": "Hi, I’m interested in buying a property",
  "industry": "real_estate"
}
```

### 🔹 Expected Response

```json
{
  "lead": { ... },
  "transcript": [ ... ],
  "classification": "Hot"
}
```

📝 A `.json` file will also be saved to the `/transcripts/` folder.

---

## ⚙️ Add More Industry Configs

The app supports multiple industries via config files.

All configs are stored inside `/config/`. Each file contains:

```json
{
  "industry": "education",
  "questions": [
    "What course are you interested in?",
    "Are you preparing for any exams?",
    "What is your budget for coaching?",
    "Would you prefer online or offline classes?",
    "When would you like to start?"
  ]
}
```

To use this config, send `"industry": "education"` in your request body.

---

## 📁 Saved Transcripts

All results are saved in:

```
/transcripts/
```

Format: `Name_Timestamp.json`  
Includes:
- Lead metadata
- Full conversation
- Lead classification

---

