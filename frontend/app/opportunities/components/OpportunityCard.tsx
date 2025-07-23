import React from "react";

interface OpportunityCardProps {
  opportunity: any;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{opportunity.title || opportunity.job_title}</h3>
      <p className="text-gray-700 mb-1">{opportunity.company || opportunity.employer_name}</p>
      <p className="text-gray-500">{opportunity.location || opportunity.job_city}</p>
    </div>
  );
};

export default OpportunityCard; 