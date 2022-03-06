import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 300;
`;

const SubContent = ({
  title,
  children,
}) => (
  <div>
    <Header>{title}</Header>
    {children}
  </div>
);

export default SubContent;
