"use client";

import { useState, useEffect } from "react";
import SidebarNav from "./components/SidebarNav";
import TopBar from "./components/TopBar";
import FilterChips from "./components/FilterChips";
import JobTypeSortToggle from "./components/JobTypeSortToggle";
import OpportunityCard from "./components/OpportunityCard";

const chips = [
  "Suggestions",
  "Your Skill",
  "Programmer",
  "Software Engineer",
  "Photographer",
  "Digital Marketing",
];
const jobTypes = ["Fulltime", "Freelance", "Details", "Salary"];

export default function Page() {
  const [opportunities, setOpportunities] = useState([]);
  const [search, setSearch] = useState("");
  const [activeChip, setActiveChip] = useState(2);
  const [jobType, setJobType] = useState(jobTypes[0]);
  const [sort, setSort] = useState("Newest");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchOpportunities() {
      setLoading(true);
      const params = new URLSearchParams({
        search: search || chips[activeChip] || "software",
        jobType,
        sort,
      });
      const res = await fetch(`/api/opportunities?${params.toString()}`);
      const data = await res.json();
      setOpportunities(data.data || data);
      setLoading(false);
    }
    fetchOpportunities();
  }, [search, activeChip, jobType, sort]);

  return (
    <div className="flex min-h-screen bg-gray-50 font-[Inter]">
      <SidebarNav />
      <div className="flex-1 flex flex-col">
        <TopBar search={search} setSearch={setSearch} />
        <FilterChips activeChip={activeChip} setActiveChip={setActiveChip} />
        <JobTypeSortToggle
          jobType={jobType}
          setJobType={setJobType}
          sort={sort}
          setSort={setSort}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {loading ? (
            <p className="col-span-full text-center text-gray-400">Loading...</p>
          ) : opportunities.length === 0 ? (
            <p className="col-span-full text-center text-gray-400">No opportunities found.</p>
          ) : (
            opportunities.map((opportunity: any) => (
              <OpportunityCard key={opportunity.id || opportunity.job_id} opportunity={opportunity} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}