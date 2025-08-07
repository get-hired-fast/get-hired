import { Squares2X2Icon, Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

const jobTypes = ["Fulltime", "Freelance", "Details", "Salary"];

type JobTypeSortToggleProps = {
  jobType: string;
  setJobType: (type: string) => void;
  sort: string;
  setSort: (sort: string) => void;
};

export default function JobTypeSortToggle({ jobType, setJobType, sort, setSort }: JobTypeSortToggleProps) {
  const [view, setView] = React.useState("grid");

  return (
    <div className="flex flex-wrap items-center justify-between px-8 py-4 bg-white border-b font-[Inter]">
      {/* Job Type Toggle */}
      <div className="flex gap-2">
        {jobTypes.map((type) => (
          <button
            key={type}
            onClick={() => setJobType(type)}
            className={`px-4 py-1 rounded-full border font-semibold text-sm transition
              ${
                type === jobType
                  ? "bg-[#5B2EEC] text-white border-[#5B2EEC]"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }
            `}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {type}
          </button>
        ))}
      </div>
      {/* Sort & View Toggle */}
      <div className="flex items-center gap-3 mt-2 md:mt-0">
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border border-gray-200 rounded px-3 py-1 text-sm font-medium focus:outline-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded ${view === "grid" ? "bg-[#5B2EEC] text-white" : "bg-gray-100 text-gray-500"}`}
        >
          <Squares2X2Icon className="h-5 w-5" />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded ${view === "list" ? "bg-[#5B2EEC] text-white" : "bg-gray-100 text-gray-500"}`}
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}