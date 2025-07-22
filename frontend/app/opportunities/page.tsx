"use client";

import { useState, useEffect } from "react";

const Page = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  useEffect(() => {
    async function fetchOpportunities() {
      setLoading(true);
      try {
        const res = await fetch("/api/opportunities");
        const data = await res.json();
        setOpportunities(data.data || data);
      } catch (e) {
        console.error("Error fetching opportunities:", e);
        setOpportunities([]);
      } finally {
        setLoading(false);
      }
    }
    fetchOpportunities();
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto flex">
      {/* Opportunities List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {opportunities.length === 0 ? (
            <p>No opportunities found.</p>
          ) : (
            opportunities.map((opportunity: any) => (
              <div key={opportunity.id || opportunity.job_id}>
                <h2>{opportunity.title || opportunity.job_title}</h2>
                <p>{opportunity.company || opportunity.employer_name}</p>
                <p>{opportunity.location || opportunity.job_city}</p>
                <p>{opportunity.salary || opportunity.salary_range}</p>
                <p>{opportunity.description}</p>
                <p>{opportunity.requirements}</p>
                <p>{opportunity.skills}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
