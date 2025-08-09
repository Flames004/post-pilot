import axios from "axios";

export async function generateWithGemini(keyword, type) {
  const prompt = `Generate 5 creative ${type} content ideas for the topic "${keyword}". 
Return JSON with keys "ideas" (array of 5 strings) and "hashtags" (array of 5 arrays, each with 5 hashtags).
Only return JSON.`;

  const url = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-mini:generate?key=${process.env.GEMINI_API_KEY}`;

  const body = {
    prompt: {
      text: prompt
    },
    maxOutputTokens: 512
  };

  // Gemini formats may change — this is a minimal example. Adjust if Google API shape differs.
  const res = await axios.post(url, body);
  const text = res.data?.candidates?.[0]?.content?.[0]?.text ?? res.data?.candidates?.[0]?.content ?? "{}";
  // Try to parse JSON out of text
  try {
    const parsed = JSON.parse(text);
    return parsed;
  } catch (e) {
    // Fallback: try to extract JSON substring
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error("Unable to parse Gemini response");
  }
}
