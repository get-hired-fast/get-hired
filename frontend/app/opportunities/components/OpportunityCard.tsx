import React from "react";

export default function OpportunityCard({ opportunity }: { opportunity: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 border hover:shadow-lg transition font-[Inter]">
      {/* Top Row: Company and Icon */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-gray-700">{opportunity.company || "Company Name"}</span>
        <div className="w-10 h-10 rounded-lg bg-[#5B2EEC]/10 flex items-center justify-center">
          <span className="text-[#5B2EEC] font-bold text-xl">
            {opportunity.company?.[0] || "J"}
          </span>
        </div>
      </div>
      {/* Job Title */}
      <h3 className="text-lg font-bold">{opportunity.title || "Job Title"}</h3>
      {/* Salary */}
      <p className="text-[#5B2EEC] font-semibold">
        {opportunity.salary || "$14,000 - $25,000"}
      </p>
      {/* Description */}
      <p className="text-gray-500 text-sm">
        {opportunity.description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
      {/* Badges */}
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-[#5B2EEC]/10 text-[#5B2EEC] px-2 py-1 rounded text-xs font-semibold">
          REMOTE
        </span>
        <span className="text-gray-400 text-xs">
          {opportunity.location || "London, England"}
        </span>
      </div>
    </div>
  );
}