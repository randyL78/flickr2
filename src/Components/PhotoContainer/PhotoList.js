// React libraries
import React from 'react';
import PropTypes from 'prop-types';

// Custom components
import PhotoItem from './PhotoItem';
import PhotoNotFound from './PhotoNotFound';

/**
 * Calls the rendering for each photo and extracts photo details from the array
 */
const PhotoList = props =>
  <ul>
    { (props.photos.length <= 0) ? 
        <PhotoNotFound /> : 
        props.photos.map( photo => 
          <PhotoItem 
            key={photo.id} 
            photoUrl={
            `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
            }/> )
    }
  </ul>

  PhotoList.proptypes = {
    photos: PropTypes.array.isRequired
  }

  export default PhotoList;
