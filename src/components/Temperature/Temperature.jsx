import React from 'react';

const Temperature = ({
  children,
}) => (
  <span>
    {children}
    &deg;
  </span>
);

export default Temperature;
