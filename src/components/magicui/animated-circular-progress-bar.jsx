import React from 'react';

const AnimatedCircularProgressBar = ({
    value = 0,
  max = 100,
  min = 0,
  gaugePrimaryColor = '#4b0082',
  gaugeSecondaryColor = '#d3d3d3',
  size = 120, // Size of the SVG
  strokeWidth = 10 // Thickness of the progress bar
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((value - min) / (max - min)) * 100;
  const dashArray = `${(progress / 100) * circumference} ${circumference}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={gaugeSecondaryColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={gaugePrimaryColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={dashArray}
        strokeDashoffset={circumference * (1 - progress / 100)}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill={gaugePrimaryColor}
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

export default AnimatedCircularProgressBar;
