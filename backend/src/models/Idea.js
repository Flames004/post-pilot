import mongoose from "mongoose";
const ideaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  keyword: String,
  type: String,
  ideas: [String],
  hashtags: [[String]], // array of arrays: hashtags per idea
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Idea", ideaSchema);
