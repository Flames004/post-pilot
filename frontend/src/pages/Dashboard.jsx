import React, { useState } from "react";
import api from "../utils/api.js";
import IdeaCard from "../components/IdeaCard";

export default function Dashboard() {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("social");
  const [ideas, setIdeas] = useState([]);
  const [hashtags, setHashtags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setIdeas([]);

    try {
      const res = await api.post(
        "/ideas",
        { keyword, type }
      );
      setIdeas(res.data.ideas || []);
      setHashtags(res.data.hashtags || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to generate ideas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🚀 AI Idea Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Transform your keywords into creative content ideas with AI-powered magic
          </p>
        </div>

        {/* Generator Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8 border border-gray-100">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🎯 Your Keyword
              </label>
              <input
                type="text"
                placeholder="e.g., fitness, cooking, travel..."
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📱 Content Type
              </label>
              <select
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg bg-white"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="social">📸 Social Media Post</option>
                <option value="blog">📝 Blog Post</option>
                <option value="ad">📢 Advertisement</option>
                <option value="instagram post">📷 Instagram Post</option>
                <option value="twitter">🐦 Twitter Tweet</option>
                <option value="linkedin">💼 LinkedIn Post</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={loading}
            >
              {loading ? "🎨 Generating Magic..." : "✨ Generate Ideas"}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
            ❌ {error}
          </div>
        )}

        {/* Results */}
        {ideas.length > 0 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                🎉 Your Creative Ideas
              </h2>
              <p className="text-gray-600">Here are {ideas.length} amazing ideas for your content!</p>
            </div>
            
            <div className="grid gap-6">
              {ideas.map((idea, idx) => (
                <IdeaCard 
                  key={idx} 
                  content={idea} 
                  hashtags={hashtags[idx] || []} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
