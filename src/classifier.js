function classifyLead(chat) {
  const fullText = chat.map(m => m.content.toLowerCase()).join(" ");

  if (fullText.includes("asdf") || fullText.match(/[0-9]{9,}/)) {
    return { status: "Invalid", reason: "Looks like test/gibberish" };
  }

  if (fullText.includes("just browsing") || fullText.includes("not sure")) {
    return { status: "Cold", reason: "No clear intent" };
  }

  if (fullText.includes("flat") && fullText.includes("budget") && fullText.includes("move")) {
    return { status: "Hot", reason: "Clear intent and urgency" };
  }

  return { status: "Cold", reason: "Fallback: no urgency" };
}

module.exports = { classifyLead };
