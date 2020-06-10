import React from 'react';

const Temperature = ({
  children,
  className,
}) => (
  <span className={className}>
    {children}
    <span>&nbsp;</span>
    <span>&#176;</span>
  </span>
);

export default Temperature
