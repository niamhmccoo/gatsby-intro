import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  display: flex;
  max-width: 1200px;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  padding: 1rem 1rem 1rem 0;
`;

const Header = () => (
  <StyledHeader>
    <NavLink to="/">FEM workshop</NavLink>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  </StyledHeader>
);

export default Header;
