import React from 'react';
import { reasons } from '../constants';


const WhyUs = () => {
 
  return (
    <div className="why-us-section bg-gradient-to-b from-black via-gray-800 to-black py-20 pb-28 text-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-goldenrod">What Makes Our Festival Unique</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
