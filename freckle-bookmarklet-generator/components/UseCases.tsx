
import React from 'react';

const useCases = [
  {
    title: "Enrich LinkedIn profiles",
    description: "Capture contact data and verified emails by sending LinkedIn URLs directly to your Freckle workflow.",
    icon: "👤"
  },
  {
    title: "Enrich HubSpot / Salesforce records",
    description: "Send CRM records to Freckle. Extract record IDs from URLs with formula columns for seamless two-way syncing.",
    icon: "⚡"
  },
  {
    title: "Enrich target account websites",
    description: "Send target account websites to find decision makers, deep firmographics, and business insights automatically.",
    icon: "🌐"
  }
];

const UseCases: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {useCases.map((useCase, index) => (
        <div 
          key={index}
          className="group flex flex-col h-full p-8 bg-white rounded-3xl border border-gray-100 hover:border-[#7c4dff]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c4dff]/5 items-start"
        >
          <div className="text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100">
            {useCase.icon}
          </div>
          <div className="flex-grow flex flex-col items-start w-full">
            <h3 className="text-lg font-bold mb-3 flex items-start text-left w-full leading-tight">
              {useCase.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed text-left">
              {useCase.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseCases;
