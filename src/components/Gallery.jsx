import { useState, useEffect } from 'react';
import { galleryData } from '../constants';
import "../index.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-section bg-gradient-to-b from-black via-gray-800 to-black py-20 pb-28 h-[700px]" id="gallery">
      <h1 className="text-4xl md:text-5xl text-center font-extrabold text-goldenrod mb-8">
        Gallery
      </h1>
      <div className="max-w-6xl mx-auto relative">
        {galleryData.map((gallery, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-[450px] object-cover rounded-lg shadow-lg overflow-hidden transition-transform duration-1000 ease-in-out transform 
              ${index === currentIndex ? 'opacity-100 scale-110 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`}
          >
            <img
              src={gallery.image}
              alt={gallery.alt}
              className="w-10/12 mx-auto h-full object-cover rounded-lg transition-transform duration-1000 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
