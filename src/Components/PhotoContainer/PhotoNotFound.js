// React libraries
import React from 'react';

/**
 * Display a message whem the API can't find any photos
 * that match search term
 */
const PhotoNotFound = () =>
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </li>

  export default PhotoNotFound;