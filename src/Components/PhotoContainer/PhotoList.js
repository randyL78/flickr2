// React libraries
import React from 'react';
import PropTypes from 'prop-types';

// Library for styling React components inside of component itself
import styled from 'styled-components';

// Custom components
import PhotoItem from './PhotoItem';
import PhotoNotFound from './PhotoNotFound';

/* Styles for sub elements */
const PhotoUl = styled.ul `
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

/**
 * Calls the rendering for each photo and extracts photo details from the array
 */
const PhotoList = props =>
  <PhotoUl>
    { // if there are no photos in the array display the not found page, otherwise show the photo collection
      (props.photos.length <= 0) ? 
        <PhotoNotFound /> : 
        props.photos.map( photo => 
          <PhotoItem 
            key={photo.id} 
            photoUrl={
            `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
            }/> )
    }
  </PhotoUl>

  PhotoList.proptypes = {
    photos: PropTypes.array.isRequired
  }

  export default PhotoList;
