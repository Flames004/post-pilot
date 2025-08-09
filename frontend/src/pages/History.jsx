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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            📚 Your Creative Journey
          </h1>
          <p className="text-gray-600 text-lg">
            Explore all the amazing ideas you've generated with AI
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8">
            ❌ {error}
          </div>
        )}
        
        {ideas.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No ideas yet!</h3>
              <p className="text-gray-600 mb-6">Start your creative journey by generating your first batch of ideas.</p>
              <a 
                href="/dashboard" 
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg"
              >
                ✨ Generate Ideas
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {ideas.map((ideaDoc, docIdx) => (
              <div key={ideaDoc._id || docIdx} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                {/* Session Header */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        🎯 {ideaDoc.keyword}
                      </h3>
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        📱 {ideaDoc.type}
                      </span>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="bg-gray-100 px-3 py-1 rounded-full">
                        💡 {ideaDoc.ideas?.length || 0} ideas
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ideas Grid */}
                <div className="grid gap-6">
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
    </div>
  );
}
