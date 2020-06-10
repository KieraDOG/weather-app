import React from 'react';

const VerticalDivider = ({
  color,
  width,
  className,
}) => (
  <div 
    className={className}
    style={{
      width,
      backgroundColor: color,
    }} 
  />
);

export default VerticalDivider;