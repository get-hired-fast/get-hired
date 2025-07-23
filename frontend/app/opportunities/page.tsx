"use client";

import { useState, useEffect } from "react";
import SidebarFilters from "./components/SidebarFilters";
import TopSearchBar from "./components/TopSearchBar";
import OpportunityCard from "./components/OpportunityCard";

const Page = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    location: "",
    employmentTypes: [],
    salaryType: [],
  });

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
    <div className="flex min-h-screen bg-gray-50">
      <SidebarFilters
        filters={filters} 
        onChange={setFilters} 
      />

      <main className="flex-1 flex flex-col">
        <TopSearchBar />
        <div className="p-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.length === 0 ? (
                <p>No opportunities found.</p>
              ) : (
                opportunities.map((opportunity: any) => (
                  <OpportunityCard
                    key={opportunity.id || opportunity.job_id}
                    opportunity={opportunity}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Page;
