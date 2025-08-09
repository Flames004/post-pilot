import axios from "axios";

export async function generateWithGemini(keyword, type) {
  const prompt = `Generate 5 creative ${type} content ideas for the topic "${keyword}". 
Return JSON with keys "ideas" (array of 5 strings) and "hashtags" (array of 5 arrays, each with 5 hashtags).
Only return JSON.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const body = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }],
    generationConfig: {
      maxOutputTokens: 512
    }
  };

  try {
    const res = await axios.post(url, body);
    const text = res.data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
    
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
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    throw error;
  }
}
