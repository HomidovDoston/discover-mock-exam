export async function send_to_bot(testData: any) {
  try {
    const BOT_TOKEN = "8332729542:AAH819PTU-ql8Am5cRCsF9Y4wDC4V6ZbmvQ";
    const CHAT_ID = "2016548030";

    const formatted = formatTestData(testData);

    const text = `
📊 <b>Test Natijasi</b>

👤 <b>Ism-familiya:</b> ${testData.userName}
🕓 <b>Sana:</b> ${new Date(testData.timestamp).toLocaleString("uz-UZ")}

${formatted}
    `;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });
  } catch (error) {
    console.error("Telegramga yuborishda xatolik:", error);
  }
}

export const formatTestData = (testData: any) => {
  const { listeningAnswers, readingAnswers, writingAnswers } = testData.answers;

  const listeningText = Object.keys(listeningAnswers)
    .sort((a, b) => Number(a) - Number(b))
    .map((key) => `${key}. ${listeningAnswers[key]}`)
    .join("\n");

  const readingText = Object.keys(readingAnswers)
    .sort((a, b) => Number(a) - Number(b))
    .map((key) => `${key}. ${readingAnswers[key]}`)
    .join("\n");

  const writingText = `
<b>Writing Task 1:</b>
${writingAnswers.writing1.substring(0, 500)}...

<b>Writing Task 2:</b>
${writingAnswers.writing2.substring(0, 500)}...
`;

  return `
<b>🧠 LISTENING:</b>
<pre>${listeningText}</pre>

<b>📖 READING:</b>
<pre>${readingText}</pre>

${writingText}
  `;
};
