import React, { useState, useEffect } from "react";
import api from "../utils/api.js";
import IdeaCard from "../components/IdeaCard";

export default function History() {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get("/ideas");
        setIdeas(res.data || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch history");
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Idea History</h2>
      {error && <p className="text-red-500">{error}</p>}
      {ideas.length === 0 ? (
        <p className="text-gray-500 text-center">No ideas generated yet.</p>
      ) : (
        <div className="space-y-8">
          {ideas.map((ideaDoc, docIdx) => (
            <div key={ideaDoc._id || docIdx} className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {ideaDoc.keyword} - {ideaDoc.type}
              </h3>
              <div className="grid gap-4">
                {ideaDoc.ideas?.map((idea, ideaIdx) => (
                  <IdeaCard 
                    key={ideaIdx} 
                    content={idea} 
                    hashtags={ideaDoc.hashtags?.[ideaIdx] || []} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
