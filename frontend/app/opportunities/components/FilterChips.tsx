import React from "react";

const chips = [
  "Suggestions",
  "Your Skill",
  "Programmer",
  "Software Engineer",
  "Photographer",
  "Digital Marketing",
];

type FilterChipsProps = {
  activeChip: number;
  setActiveChip: (idx: number) => void;
};

export default function FilterChips({ activeChip, setActiveChip }: FilterChipsProps) {
  return (
    <div className="flex gap-3 px-8 py-3 bg-white border-b overflow-x-auto font-[Inter]">
      {chips.map((chip, idx) => (
        <button
          key={chip}
          onClick={() => setActiveChip(idx)}
          className={`px-4 py-1 rounded-full border shadow-sm transition font-semibold text-sm whitespace-nowrap
            ${
              idx === activeChip
                ? "bg-[#5B2EEC] text-white border-[#5B2EEC]"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            }
          `}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}