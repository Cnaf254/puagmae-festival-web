import React, { useState } from 'react';
import { services } from '../constants';
import Modal from './Modal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [visibleServices, setVisibleServices] = useState(3);

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleLoadMore = () => {
    setVisibleServices((prev) => prev + 3);
  };

  const handleReadLess = () => {
    setVisibleServices((prev) => (prev - 3 > 3 ? prev - 3 : 3));
  };

  return (
    <div className="relative py-20 pb-28 bg-gradient-to-r from-gray-800 to-gray-900 text-white" id='services'>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-16 text-center text-goldenrod">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, visibleServices).map((service, index) => (
            <div key={index} className="bg-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg mb-4 flex-grow">{service.description}</p>
                <button
                  onClick={() => handleLearnMoreClick(service)}
                  className="bg-goldenrod text-black px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-300 mt-auto"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          {visibleServices < services.length && (
            <button
              onClick={handleLoadMore}
              className="bg-goldenrod text-black px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-300 mr-4"
            >
              Other Services
            </button>
          )}
          {visibleServices > 3 && (
            <button
              onClick={handleReadLess}
              className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-600 transition-colors duration-300"
            >
              Less Services
            </button>
          )}
        </div>
      </div>

      {selectedService && (
        <Modal 
          isOpen={!!selectedService}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Services;
