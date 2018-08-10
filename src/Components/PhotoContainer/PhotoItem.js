// React libraries
import React from 'react';
import PropTypes from 'prop-types';

// Library for styling React components inside of component itself
import styled from 'styled-components';


/* Styles for sub elements */
const PhotoLi = styled.li `
  width: 220px;
  height: 165px;
  overflow: hidden;
  margin: auto
  margin-bottom: 15px;
  &:hover img {
    transform: scale(1.65);
  }
  @media only screen and (min-width: 768px)  { 
    margin: 0 0 15px;
  }
`;

const Image = styled.img `
  width: 100%;
  transform: scale(1.25);
  transition: transform 1.25s;
`;


/**
 * Render an individual photo from Flickr API
 */
const PhotoItem = props =>
  <PhotoLi>
    <Image src={props.photoUrl} alt="" />
  </PhotoLi>

  PhotoItem.proptypes = {
    photoUrl: PropTypes.string.isRequired
  }

  export default PhotoItem;