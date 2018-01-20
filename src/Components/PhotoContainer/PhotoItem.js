// React libraries
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Render an individual photo from Flickr API
 */
const PhotoItem = props =>
  <li>
    <img src={props.photoUrl} alt="" />
  </li>

  PhotoItem.proptypes = {
    photoUrl: PropTypes.string.isRequired
  }

  export default PhotoItem;