// React libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Library for styling React components inside of component itself
import styled from 'styled-components';

// Custom components
/**
 * Please place your config.js file in the "src" folder
 * and give it a default export of apiKey to get this to work
 */
import apiKey from '../../config';
import PhotoList from './PhotoList';
import Loading from './Loading';

/* Create styles for title h2 */
const Title = styled.h2 `
  font-family: 'Open Sans', sans-serif;
  color: #3f4850;
  font-size: 2em;
  margin: 52px 0 40px;
  text-transform: capitalize;
`

/**
 * Main container for displaying photos and handling
 * App state
 */
class PhotoContainer extends Component {
  
 state = {
    // number of photos to pull and display at a time
    numberOfPhotos: 12,
    isLoading: true,
    // array to contain API results
    photos: [],
  };
  

  // Search for photos when app first starts
  componentDidMount () {
    this.searchFlickr(this.props.searchTerm);
  }

  // When component updates compare the old and new search term, if they are the same don't re-search flickr
  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      // show loading screen while search is being done
      this.setState({isLoading: true})
      this.searchFlickr(this.props.searchTerm);
    }
  }

  // search flickr based on the search term
  searchFlickr (searchTerm) {
    // Use axios to pull photos from flickr with tags passed down from the url
    this.props.searchFlickr(searchTerm);
  }

  render () {
    return (
      <div className="photo-container">
        <Title>{this.props.searchTerm}</Title>
        {
          /* if axios is loading photos still, show loading screen otherwise show the photos */
          (this.props.isLoading) ? 
          <Loading /> : 
          <PhotoList photos={this.props.photos} />
        }
      </div>
    )
  }
}

PhotoContainer.proptypes = {
  searchTerm: PropTypes.string.isRequired
}


export default PhotoContainer;