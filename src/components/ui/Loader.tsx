import React from 'react';

const Loader: React.FC = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
    // style={{ backgroundImage: "url('/loder.gif')" }}
  >
    <div className="absolute inset-0 bg-white/70 z-0" />
    <div className="flex flex-col items-center relative z-10">
      <svg className="animate-spin h-12 w-12 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span className="text-blue-700 text-lg font-semibold">Please wait...</span>
    </div>
  </div>
);

export default Loader;
