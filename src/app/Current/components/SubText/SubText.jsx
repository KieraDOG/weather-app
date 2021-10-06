import React from 'react';
import styled from 'styled-components';

const SemiTransparentText = styled.span`
  opacity: 0.6;
`;

const SubText = ({ children }) => (
  <SemiTransparentText>{children}</SemiTransparentText>
)

export default SubText;
