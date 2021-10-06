import React from 'react';
import styled from 'styled-components';
import SubText from '../../../SubText';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 16px;
`;

const Meta = ({
  title,
  children,
}) => (
  <Container>
    <Title>
      <SubText>{title}</SubText>
    </Title>
    <div>
      <SubText>{children}</SubText>
    </div>
  </Container>
);

export default Meta;
