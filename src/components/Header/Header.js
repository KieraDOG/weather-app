import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 300;
`;

const Header = ({
  title
}) => (
  <Wrapper>
    {title}
  </Wrapper>
);

export default Header;
