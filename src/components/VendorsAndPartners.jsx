import React from 'react';
import { vendors } from '../constants';


const VendorsAndPartners = () => {
    return (
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto text-center px-8">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-16">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="max-h-28 mx-auto mb-6 object-contain"
                  />
                  <h3 className="text-xl font-bold text-white">
                    {vendor.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
  
export default VendorsAndPartners;