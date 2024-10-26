import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { videos } from '../constants';

const VideosFromPreviousEvents = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrevious = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className="relative py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-extrabold mb-12 text-center">Videos from Previous Events</h2>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
                        <video
                            className="w-full h-80 rounded-lg"
                            controls
                            src={videos[currentVideoIndex].path}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex justify-between w-full mt-4">
                        <button
                            onClick={handlePrevious}
                            className="bg-goldenrod text-black px-4 py-2 rounded-md font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-goldenrod text-black px-4 py-2 rounded-md font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideosFromPreviousEvents;
