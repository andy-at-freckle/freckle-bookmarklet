import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center w-full">
      {/* Brand Logo */}
      <a href="https://www.freckle.io/" target="_blank" rel="noopener noreferrer" className="mb-8">
        <img 
          src="/logo.svg" 
          alt="Freckle" 
          className="h-8 w-auto hover:opacity-80 transition-opacity"
        />
      </a>
      
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
