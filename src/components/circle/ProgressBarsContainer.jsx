import React from 'react';
import AnimatedCircularProgressBar from './circle';

const ProgressBarsContainer = () => {
  const progressValues = [70, 50, 90, 80, 60]; // Example values

  return (
    <div className="flex justify-around items-center space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg">
      {progressValues.map((value, index) => (
        <div key={index} className="transition-transform duration-500 hover:scale-110">
          <AnimatedCircularProgressBar value={value} />
        </div>
      ))}
    </div>
  );
};

export default ProgressBarsContainer;
