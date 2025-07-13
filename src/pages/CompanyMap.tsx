import React from 'react';

const CompanyMap = () => (
  <section className="py-16 bg-white animate-fade-in" style={{ animationDelay: '0.03s', animationDuration: '1.2s', animationFillMode: 'both' }}>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-16">
      {/* Map on the left */}
      <div className="flex-1 flex items-center justify-center min-w-[300px]">
        <img
          src="/India-Map_Option_01_01_LOOP.gif"
          alt="India Map"
          className="w-full h-auto max-w-[480px] md:max-w-[420px] lg:max-w-[500px] object-contain"
          style={{ margin: 0, boxShadow: 'none', border: 'none', background: 'none' }}
        />
      </div>
      {/* Blog-style text on the right */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Presence Across India</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Jaya Shankar Group's companies are strategically located in key states across India, from the heart of Chhattisgarh to the coasts of Andhra Pradesh. Our presence in these regions enables us to drive innovation, foster sustainable growth, and deliver world-class solutions in infrastructure, manufacturing, energy, and logistics.
        </p>
        <p className="text-base text-gray-500">
          With a vision to empower industries and communities, we are committed to building a brighter future for India—one project, one partnership, and one state at a time.
        </p>
      </div>
    </div>
  </section>
);

export default CompanyMap; 