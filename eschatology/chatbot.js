function detectLanguage(text) {
  return /[அ-ஹ]/.test(text) ? "ta" : "en";
}

function toggleChat() {
  document.getElementById("chatbot").classList.toggle("hidden");
}

function quickAsk(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");
  const userText = input.value.trim();
  if (!userText) return;

  const lang = detectLanguage(userText);
  const text = userText.toLowerCase();

  chatBody.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;

  let responses = [];

  ESCHATOLOGY_CONTENT.forEach(item => {
    item.keywords.forEach(keyword => {
      if (text.includes(keyword)) {
        responses.push(item);
      }
    });
  });

  let finalResponse = "";

  if (responses.length > 0) {
    responses.forEach(item => {
      finalResponse += `
        <p>
          ${lang === "ta" ? item.ta : item.en}
          <br/><em>📖 ${item.verse}</em>
        </p>
      `;
    });
  } else {
    finalResponse = lang === "ta"
      ? "இந்த கேள்விக்கு வேதாகமத்தை பிரார்த்தனையுடன் வாசிக்கவும். மத்தேயு 24 மற்றும் வெளிப்படுத்தின விசேஷம் உங்களுக்கு உதவும்."
      : "Please read the Bible prayerfully. Matthew 24 and the Book of Revelation will help you.";
  }

  chatBody.innerHTML += `<p><strong>Bot:</strong> ${finalResponse}</p>`;
  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
}
