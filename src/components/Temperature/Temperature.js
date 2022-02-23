import React from 'react';
import styled from 'styled-components';

const SIZE = {
  base: '1rem',
  xl: '5rem', 
}

const Wrapper = styled.div`
  font-size: ${({ size }) => SIZE[size]};
`;

const Temperature = ({
  value,
  size = 'base',
}) => (
  <Wrapper size={size}>
    {value}
    °
  </Wrapper>
);

export default Temperature;
