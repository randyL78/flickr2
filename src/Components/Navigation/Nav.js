/* Fully modular Navigation component that could be dropped into any project in any project */

// React Libraries
import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

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
const Navigation = props => {
  // create an array of relative urls for each NavLink's to property
  let urls = [];
  if (props.urls) {
    urls = props.urls
  } else {
    urls = props.links
  }
  // Counter to use as identifier for each NavLink
  let key = 0;
  return(
    <nav className="main-nav">
      <NavUl>
        {
          // Iterate through each value in links array and create a Navlink from it
          props.links.map( (link, i) => 
            <NavLi key={key++}><NavBaseA to={`/${urls[i].toLowerCase()}`} >{link}</NavBaseA></NavLi>
        )}  
      </NavUl>
    </nav>  
  )}

  Navigation.prototypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
    urls: PropTypes.arrayOf(PropTypes.string)
  }

  export default Navigation;