// React libraries
import React from 'react';

// Library for styling React components inside of component itself
import styled from 'styled-components';

/* Create styles for sub elements */
const NotFoundLi = styled.li `
  width: 100%;
`;

/**
 * Display a message whem the API can't find any photos
 * that match search term
 */
const PhotoNotFound = () =>
  <NotFoundLi className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </NotFoundLi>

  export default PhotoNotFound;