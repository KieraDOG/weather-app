import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 0.25rem;
`;

const Attribute = ({
  name,
  data,
}) => (
  <Wrapper>
    <Title>{name}</Title>
    <div>{data}</div>
  </Wrapper>
);

export default Attribute;
