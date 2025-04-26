import React from 'react';
import './index.css'; // Create this file for the CSS

const Spinner = ({ size = 40, color = '#333' }) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderColor: color,
    borderRightColor: 'transparent',
  };

  return <div className="spinner" style={spinnerStyle}></div>;
};

export default Spinner;