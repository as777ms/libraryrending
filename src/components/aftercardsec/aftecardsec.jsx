import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aftercardsec = ({ bookheader, bookheader2 }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex h-[700px] gap-4 p-4 w-[70%] m-auto mt-[50px]">
      {/* First Image with Text Overlay */}
      <div 
        className="relative w-1/2 h-full flex flex-col justify-center items-center" 
        data-aos="fade-left"
      >
        <img 
          src={bookheader} 
          alt="Book Header" 
          className="h-full w-full object-cover rounded-md shadow-lg" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-md p-4">
          <p className="text-white text-2xl font-semibold text-center">
            Discover a World of Knowledge: <br /> The Best Books, All for Free!
          </p>
          <button 
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Start Discovering
          </button>
        </div>
      </div>

      {/* Second and Third Images with Text Overlays */}
      <div 
        className="w-1/2 h-full flex flex-col justify-between gap-4" 
        data-aos="fade-right"
      >
        <div className="relative flex flex-col justify-center items-center h-[660px]">
          <img 
            src={bookheader2} 
            alt="Book Header 2" 
            className="h-full w-full object-cover rounded-md shadow-lg" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-md p-4">
            <p className="text-white text-xl font-medium text-center">
              Enjoy Endless Reading: <br /> Anytime, Anywhere.
            </p>
            <button 
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Read For Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aftercardsec;