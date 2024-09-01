import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Aftercard = ({ bookheader, bookheader2, bookheader3 }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[700px] gap-4 p-4 w-full md:w-[70%] m-auto mt-[50px]">
      {/* First Image with Text Overlay */}
      <div 
        className="relative w-full md:w-1/2 h-64 md:h-full flex flex-col justify-center items-center" 
        data-aos="fade-left"
      >
        <img 
          src={bookheader} 
          alt="Book Header" 
          className="h-full w-full object-cover rounded-md shadow-lg" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-md p-4">
          <p className="text-white text-lg md:text-2xl font-semibold text-center">
            {t('discoverText')}
          </p>
          <button 
            className="mt-4 px-4 md:px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t('startDiscovering')}
          </button>
        </div>
      </div>

      {/* Second and Third Images with Text Overlays */}
      <div 
        className="w-full md:w-1/2 h-auto md:h-full flex flex-col md:justify-between gap-4" 
        data-aos="fade-right"
      >
        <div className="relative h-64 md:h-1/2 flex flex-col justify-center items-center">
          <img 
            src={bookheader2} 
            alt="Book Header 2" 
            className="h-full w-full object-cover rounded-md shadow-lg" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-md p-4">
            <p className="text-white text-lg md:text-xl font-medium text-center">
              {t('enjoyReading')}
            </p>
            <button 
              className="mt-4 px-4 md:px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t('readForFree')}
            </button>
          </div>
        </div>

        <div className="relative h-64 md:h-1/2 flex flex-col justify-center items-center">
          <img 
            src={bookheader3} 
            alt="Book Header 3" 
            className="h-full w-full object-cover rounded-md shadow-lg" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-md p-4">
            <p className="text-white text-lg md:text-xl font-medium text-center">
              {t('downloadEase')}
            </p>
            <button 
              className="mt-4 px-4 md:px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t('readOffline')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aftercard;