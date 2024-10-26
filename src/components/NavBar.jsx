import React, { useState, useEffect } from 'react';
import { navLinks, socialLinks } from '../constants';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(handleScroll, options);

    navLinks.forEach(link => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className='sticky top-0 left-0 w-full bg-black text-white z-50'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto py-4'>
        <div className='flex-none'>
          <img 
            src={logo} 
            alt="puagmae logo" 
            className='w-20 h-20'
          />
        </div>
        <div className='hidden lg:flex justify-center'>
          <ul className='flex space-x-6 list-none'>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <a 
                  href={`#${navLink.id}`} 
                  className={`text-lg font-medium ${
                    activeLink === navLink.id ? 'text-goldenrod' : 'text-white'
                  } hover:text-goldenrod hover:scale-105 transform transition duration-300`}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden lg:flex space-x-4'>
          <ul className='flex space-x-4 list-none'>
            {socialLinks.map((socialLink) => (
              <li key={socialLink.path}>
                <a 
                  href={socialLink.path} 
                  className='text-xl text-white hover:text-goldenrod hover:scale-105 transform transition duration-300'
                >
                  {socialLink.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:hidden flex items-center px-4'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-between items-center p-4'>
            <img 
              src={logo} 
              alt="puagmae logo" 
              className='w-16 h-16'
            />
            <button onClick={() => setIsOpen(false)} className='text-white'>
              <FaTimes size={24} />
            </button>
          </div>
          <ul className='flex flex-col flex-grow p-4 space-y-4'>
            {navLinks.map((navLink) => (
              <li key={navLink.id} className='cursor-pointer'>
                <a
                  href={`#${navLink.id}`}
                  className={`text-lg font-medium ${
                    activeLink === navLink.id ? 'text-goldenrod' : 'text-white'
                  } hover:text-goldenrod hover:scale-105 transform transition duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
          <div className='p-4 mt-auto'>
            <ul className='flex space-x-4'>
              {socialLinks.map((socialLink) => (
                <li key={socialLink.path} className='text-xl'>
                  <a 
                    href={socialLink.path} 
                    className='text-white hover:text-goldenrod transform transition duration-300'
                  >
                    {socialLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
