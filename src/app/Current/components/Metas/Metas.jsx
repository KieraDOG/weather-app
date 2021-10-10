import React from 'react';
import styled from 'styled-components';
import Meta from './components/Meta';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Divider = styled.div`
  margin: 0 32px;
  border-left: 1px solid white;
  opacity: 0.6;
`;

const Metas = ({
  humidity,
  wind,
}) => (
  <Container>
    <Meta title="HUMIDITY">{`${humidity}%`}</Meta>
    <Divider />
    <Meta title="WIND">{`${wind} KM/H`}</Meta>
  </Container>
);

export default Metas;
