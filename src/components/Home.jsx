import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import backgroundImage from '../assets/home-background.jpg';
import { FaRegClock } from 'react-icons/fa';

const Home = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'An Epic Festival Awaiting Your Presence',
        'Join Us for Unforgettable Celebrations',
        'Experience the African Golden 13th Month',
        'A Cultural Extravaganza Like No Other'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining() {
    const eventStartDate = new Date('2024-09-05T00:00:00');
    const eventEndDate = new Date('2024-09-10T23:59:59');
    const now = new Date();
    let difference;

    if (now < eventStartDate) {
      difference = eventStartDate - now;
    } else if (now > eventEndDate) {
      difference = 0;
    } else {
      difference = eventEndDate - now;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div
      className='relative h-screen bg-cover bg-center flex items-center justify-center'
      id='home'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60'></div>
      <div className='relative text-center text-white p-6 md:p-12'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
          Join Us to Celebrate <br />
          the African <span className='text-goldenrod'>Golden</span> 13th Month
        </h1>
        <p className='text-xl md:text-2xl mb-8'>
          <span
            ref={typedElement}
            className='block text-3xl md:text-4xl font-semibold text-white animate-pulse'
          ></span>
        </p>
        <div className='bg-goldenrod p-6 rounded-lg shadow-2xl inline-block'>
          <h2 className='text-2xl md:text-4xl font-semibold mb-4 flex items-center justify-center'>
            <FaRegClock className='mr-2 text-3xl md:text-4xl' />
            Countdown to the Festival
          </h2>
          <div className='flex flex-wrap justify-center gap-4 mb-6'>
            <div className='bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center w-24 md:w-32 lg:w-36'>
              <span className='text-3xl md:text-4xl lg:text-5xl font-bold'>{timeRemaining.days}</span>
              <div className='text-xs md:text-sm font-medium'>Days</div>
            </div>
            <div className='bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center w-24 md:w-32 lg:w-36'>
              <span className='text-3xl md:text-4xl lg:text-5xl font-bold'>{timeRemaining.hours}</span>
              <div className='text-xs md:text-sm font-medium'>Hours</div>
            </div>
            <div className='bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center w-24 md:w-32 lg:w-36'>
              <span className='text-3xl md:text-4xl lg:text-5xl font-bold'>{timeRemaining.minutes}</span>
              <div className='text-xs md:text-sm font-medium'>Minutes</div>
            </div>
            <div className='bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center w-24 md:w-32 lg:w-36'>
              <span className='text-3xl md:text-4xl lg:text-5xl font-bold'>{timeRemaining.seconds}</span>
              <div className='text-xs md:text-sm font-medium'>Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
