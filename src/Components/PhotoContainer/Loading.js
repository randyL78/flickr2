// React libraries
import React from 'react';

// Library for styling React components inside of component itself
import styled from 'styled-components';

/* Create styles for loading gif */
const LoadingGif = styled.div `
  background: url("images/loading.gif") center no-repeat ;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  width:  50px;
  background-size: cover; 
`

/**
 *  Display a loading indicator while FLickr Promise is being fulfilled
 */
const Loading = () =>
  <div>
    <h3>Loading images...</h3>
    <LoadingGif />
  </div>


export default Loading;