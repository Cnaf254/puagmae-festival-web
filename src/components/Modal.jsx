import React from 'react';

const Modal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
      <div className='bg-white text-black rounded-lg p-8 max-w-lg w-full'>
        <h2 className='text-3xl font-bold mb-4'>{service.title}</h2>
        <img src={service.image} alt={service.title} className='w-full h-48 object-cover mb-4 rounded-lg' />
        <p className='text-lg mb-4'>{service.fullDescription}</p>
        <button 
          onClick={onClose} 
          className='bg-goldenrod text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition-colors duration-300'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
