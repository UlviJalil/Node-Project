import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollRatio = (scrolled / scrollHeight) * 100;


    if (scrollRatio > 100) scrollRatio = 100;
    if (scrollRatio < 0) scrollRatio = 0;

    setScrollPosition(scrollRatio);
    setIsVisible(scrolled > 100);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 right-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 bg-white rounded-full border border-gray-300 shadow-lg flex items-center justify-center overflow-hidden"
        >

          <div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black rounded-b-full transition-transform duration-300"
            style={{
              transform: `translateY(${100 - scrollPosition}%)`,
            }}
          ></div>


          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
