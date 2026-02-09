import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full">
      {/* Brand Logo - Recreated to match official identity */}
      <div className="flex items-baseline gap-[4px] mb-8 select-none group">
        <span className="text-[#1a1a1a] text-[42px] font-logo lowercase leading-none tracking-tight">freckle</span>
        <span className="w-[6px] h-[6px] bg-[#7c4dff] rounded-full translate-y-[-2px]"></span>
      </div>
      
      <div className="space-y-6 w-full">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-[64px] font-[800] tracking-tight leading-[1.1] text-[#1a1a1a]">
            Send to Freckle
          </h1>
          <p className="text-base md:text-xl text-gray-500 w-full md:whitespace-nowrap leading-relaxed font-medium">
            Create a bookmarklet to send any URL instantly to your Freckle webhook tables.
          </p>
        </div>

        {/* Brand Bubbles */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {[
            'Enrich LinkedIn profiles', 
            'Enrich HubSpot / Salesforce records', 
            'Enrich target account websites'
          ].map((text) => (
            <div 
              key={text} 
              className="px-5 py-2.5 bg-white border border-gray-100 rounded-full text-[10px] font-[700] text-gray-400 tracking-wider uppercase shadow-sm"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;