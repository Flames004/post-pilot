import React, { useState, useEffect } from "react";
import axios from "axios";
import IdeaCard from "../components/IdeaCard";

export default function History() {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("/api/ideas", { withCredentials: true });
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
        <div className="grid gap-4">
          {ideas.map((idea, idx) => (
            <IdeaCard key={idx} idea={idea} />
          ))}
        </div>
      )}
    </div>
  );
}
