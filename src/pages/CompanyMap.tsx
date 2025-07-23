import React from 'react';
import {
  MapPin,
  Target,
} from "lucide-react"

const CompanyMap = () => (
  <section
    className="py-16 bg-white animate-fade-in"
    style={{
      animationDelay: '0.03s',
      animationDuration: '1.2s',
      animationFillMode: 'both',
    }}
  >
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-16">
      {/* Map with markers */}
      <div className="flex-1 flex items-center justify-center min-w-[300px] relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcQzkker2UzkB2h3zGo_82nZA_YAtogp2Dw&s"
          // src='https://www.nicepng.com/png/detail/365-3655555_mintel-in-india-india-map-outline-png.png'
          alt="India Map"
          className="w-full h-auto max-w-[480px] md:max-w-[420px] lg:max-w-[500px] object-contain"
          style={{ margin: 0, boxShadow: 'none', border: 'none', background: 'none' }}
        />

        {/* Odisha - approximate top-right of central India */}
        <div className="absolute top-[53%] left-[55.5%]">
          <div className="w-3 h-3  rounded-full animate-ping" ><MapPin className="w-3 h-3 text-green" /></div>
          <div className="w-3 h-3  rounded-full absolute top-0 left-0" />
          <span className="absolute left-0 top-[-14px] text-sm text-[blue] font-semibold whitespace-nowrap">Odisha</span>
        </div>

        {/* Andhra Pradesh - southeast coast */}
        <div className="absolute top-[62.5%] left-[50.5%]">
          <div className="w-3 h-3  rounded-full animate-ping" ><MapPin className="w-3 h-3 text-blue-800" /></div>
          <div className="w-3 h-3  rounded-full absolute top-0 left-0" />
          <span className="absolute left-[30px] top-[6px] text-sm text-[blue] font-semibold whitespace-nowrap">Andhra Pradesh</span>
        </div>

        {/* Assam - northeast */}
        <div className="absolute top-[32.5%] left-[80%]">
          <div className="w-3 h-3  rounded-full animate-ping"><MapPin className="w-3 h-3 text-blue-800" /></div>
          <div className="w-3 h-3  rounded-full absolute top-0 left-0" />
          <span className="absolute left-1 top-[-24px] text-sm text-[blue] font-semibold whitespace-nowrap">Assam</span>
        </div>

         {/* bangalore  */}
        <div className="absolute top-[78.5%] left-[34%]">
          <div className="w-3 h-3  rounded-full animate-ping"><MapPin className="w-3 h-3 text-blue-800" /></div>
          <div className="w-3 h-3  rounded-full absolute top-0 left-0" />
          <span className="absolute left-[-30px] top-[-20px] text-sm text-[blue] font-semibold whitespace-nowrap">Bangalore</span>
        </div>

         {/* Telangana - northeast */}
        <div className="absolute top-[58.5%] left-[40%]">
          <div className="w-3 h-3  rounded-full animate-ping"><MapPin className="w-3 h-3 text-blue-800" /></div>
          <div className="w-3 h-3  rounded-full absolute top-0 left-0" />
          <span className="absolute left-[-15px] top-[-20px] text-sm text-[blue] font-semibold whitespace-nowrap">Telangana</span>
        </div>
      </div>

      {/* Text on the right */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-navy-900 text-4xl md:text-5xl font-bold text-center mb-6"style={{ fontFamily: 'articulatecf, sans-serif' }}>Our Presence Across India</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-3xl text-center" style={{ fontFamily: 'articulatecf, sans-serif' }}>
          Jaya Shankar Group's companies are strategically located in key states across India, from the heart of Chhattisgarh to the coasts of Andhra Pradesh. Our presence in these regions enables us to drive innovation, foster sustainable growth, and deliver world-class solutions in infrastructure, manufacturing, energy, and logistics.
        </p>
        <p className="text-base text-gray-500"style={{ fontFamily: 'articulatecf, sans-serif' }}>
          With a vision to empower industries and communities, we are committed to building a brighter future for India—one project, one partnership, and one state at a time.
        </p>
      </div>
    </div>
  </section>
);

export default CompanyMap;