import React from 'react';
import styled from 'styled-components';
import Attribute from './components/Attribute';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Divider = styled.div`
  width: 2px;
  background: rgba(255, 255, 255, 0.7);
  margin: 0 1.5rem;
`;

const Attributes = ({
  attributes,
}) => {
  return (
    <Wrapper>
      <Attribute name="HUMIDITY" data={attributes.humidity} />
      <Divider />
      <Attribute name="WIND" data={attributes.wind} /> 
    </Wrapper>
  );
}

export default Attributes;
