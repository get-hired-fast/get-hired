"use client";
import { useEffect, useState } from "react";

export default function SavedOpportunitiesPage() {
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/saved-opportunities")
      .then((res) => res.json())
      .then((data) => setSaved(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Saved Opportunities</h1>
      {loading ? (
        <p>Loading...</p>
      ) : saved.length === 0 ? (
        <p>No saved opportunities found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {saved.map((op: any) => (
            <div key={op.id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{op.title}</h2>
              <p className="text-gray-600 mb-4">{op.company}</p>
              <p className="text-gray-600 mb-4">{op.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
