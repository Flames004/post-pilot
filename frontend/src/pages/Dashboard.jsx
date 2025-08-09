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
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        AI-Powered Idea Generator
      </h2>

      <form
        onSubmit={handleGenerate}
        className="bg-white shadow p-6 rounded-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Enter keyword..."
          className="w-full p-2 border rounded"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
        <select
          className="w-full p-2 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="social">Social Media Post</option>
          <option value="blog">Blog Post</option>
          <option value="ad">Advertisement</option>
        </select>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Ideas"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 grid gap-4">
        {ideas.map((idea, idx) => (
          <IdeaCard 
            key={idx} 
            content={idea} 
            hashtags={hashtags[idx] || []} 
          />
        ))}
      </div>
    </div>
  );
}
