import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 2rem;
  font-weight: 500;
  position: relative;
`;

const Line = styled.div`
  width: 50%;
  height: 4px;
  background: white;
  margin-top: 0.75rem;
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
`;

const CityName = () => (
  <Wrapper>
    <div>Melbourne</div>
    <Line />
  </Wrapper>
);

export default CityName;
