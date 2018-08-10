// React Libraries
import React from 'react';
import {NavLink} from 'react-router-dom';

// Library for styling React components inside of component itself
import styled from 'styled-components';

/* Create styles for sub elements */
const NavUl = styled.ul`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  list-style-type: none;
  padding-left: 0;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const NavLi = styled.li `
  width: 100%;
  margin-bottom: 1em;
  @media only screen and (min-width: 768px) {  
    margin: 10px;
    width: 100px;  
  }
`;

const NavBaseA = styled(NavLink) `
text-decoration: none;
  display: block;
  background: #438bbd;
  border-radius: 3px;
  padding: 5px;
  color: #fff;
  &:hover, &.active {
    background-color: #275270;
  }
`;

/**
 *  Renders navigation links
 */
const Navigation = () =>
  <nav className="main-nav">
    <NavUl>
      <NavLi><NavBaseA to='/cats'>Cats</NavBaseA></NavLi>
      <NavLi><NavBaseA to='/dogs'>Dogs</NavBaseA></NavLi>
      <NavLi><NavBaseA to='/computers'>Computers</NavBaseA></NavLi>
      <NavLi><NavBaseA to='/search'>Search</NavBaseA></NavLi>      
    </NavUl>
  </nav>  

  export default Navigation;