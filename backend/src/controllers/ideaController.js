import Idea from "../models/Idea.js";
import { generateWithGemini } from "../utils/generateWithGemini.js";

// export async function createIdea(req, res) {
//   const { keyword, type } = req.body;
//   if (!keyword || !type) return res.status(400).json({ message: "Missing input" });
//   try {
//     const parsed = await generateWithGemini(keyword, type);
//     // expected parsed = { ideas: [...], hashtags: [ [...], [...], ... ] }
//     const ideaDoc = await Idea.create({
//       user: req.userId,
//       keyword,
//       type,
//       ideas: parsed.ideas,
//       hashtags: parsed.hashtags
//     });
//     res.json(ideaDoc);
//   } catch (e) { res.status(500).json({ message: e.message }); }
// }

export async function createIdea(req, res) {
  console.log("BODY RECEIVED:", req.body);
  console.log("USER ID:", req.userId);

  const { keyword, type } = req.body;
  if (!keyword || !type) {
    return res.status(400).json({
      message: "Missing input",
      body: req.body // send back what was received
    });
  }

  try {
    const parsed = await generateWithGemini(keyword, type);
    const ideaDoc = await Idea.create({
      user: req.userId,
      keyword,
      type,
      ideas: parsed.ideas,
      hashtags: parsed.hashtags
    });
    res.json(ideaDoc);
  } catch (e) {
    console.error("Error in createIdea:", {
      message: e.message,
      response: e.response?.data,
      status: e.response?.status
    });
    res.status(500).json({ message: e.message });
  }
}

export async function getIdeas(req, res) {
  const docs = await Idea.find({ user: req.userId }).sort({ createdAt: -1 });
  res.json(docs);
}
