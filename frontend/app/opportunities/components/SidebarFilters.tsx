import React from "react";

const employmentTypes = [
  "Permanent Full-Time",
  "Part-Time",
  "Casual/Vacation",
  "Contract",
  "Internship/Trainee",
];

const salaryTypes = [
  "Annual Salary Package",
  "Annual & Commission",
];

const SidebarFilters = ({
  filters,
  onChange,
}: {
  filters: any;
  onChange: (newFilters: any) => void;
}) => {
  return (
    <aside className="w-72 p-4 border-r min-h-screen bg-white">
      <h2 className="text-lg font-semibold mb-4">Job Search Settings</h2>
      {/* Job Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Job Title</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1"
          value={filters.title || ""}
          onChange={e => onChange({ ...filters, title: e.target.value })}
          placeholder="Designer, Manager etc..."
        />
      </div>
      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1"
          value={filters.category || ""}
          onChange={e => onChange({ ...filters, category: e.target.value })}
          placeholder="Any classification"
        />
      </div>
      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1"
          value={filters.location || ""}
          onChange={e => onChange({ ...filters, location: e.target.value })}
          placeholder="Suburb or Town"
        />
      </div>
      {/* Type of Employment */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Type of employment</label>
        {employmentTypes.map(type => (
          <div key={type} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={filters.employmentTypes?.includes(type) || false}
              onChange={e => {
                const newTypes = e.target.checked
                  ? [...(filters.employmentTypes || []), type]
                  : (filters.employmentTypes || []).filter((t: string) => t !== type);
                onChange({ ...filters, employmentTypes: newTypes });
              }}
              className="mr-2"
            />
            <span>{type}</span>
          </div>
        ))}
      </div>
      {/* Salary Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Salary Type</label>
        {salaryTypes.map(type => (
          <div key={type} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={filters.salaryTypes?.includes(type) || false}
              onChange={e => {
                const newTypes = e.target.checked
                  ? [...(filters.salaryTypes || []), type]
                  : (filters.salaryTypes || []).filter((t: string) => t !== type);
                onChange({ ...filters, salaryTypes: newTypes });
              }}
              className="mr-2"
            />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarFilters;