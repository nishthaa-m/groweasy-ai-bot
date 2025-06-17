const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const { simulateChat } = require("./chatEngine");
const { classifyLead } = require("./classifier");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Dynamic config loader based on industry
const getConfig = (industry = "real_estate") => {
  const file = `../config/${industry}.json`;
  return require(file);
};

app.get("/", (req, res) => {
  res.send("👋 Welcome to the GrowEasy AI Bot API! Use POST /lead to interact.");
});

app.post("/lead", async (req, res) => {
  const lead = req.body;
  const config = getConfig(lead.industry || "real_estate");

  const transcript = await simulateChat(lead, config);
  const classification = classifyLead(transcript);

  const result = {
    lead,
    transcript,
    classification
  };

  const filename = `${lead.name.replace(/\s+/g, "_")}.json`;
  const filepath = path.join(__dirname, "../transcripts", filename);

  fs.writeFileSync(filepath, JSON.stringify(result, null, 2));

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
