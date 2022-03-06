import React from 'react';

const Temperature = ({
  value,
  className,
}) => (
  <div className={className}>
    {value}
    °
  </div>
);

export default Temperature;
