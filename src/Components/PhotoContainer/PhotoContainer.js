// React libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Library for styling React components inside of component itself
import styled from 'styled-components';

// Custom components
/**
 * Please place your config.js file in the "src" folder
 * and give it a default export of apiKey to get this to work
 */
import Loading from './Loading';
import PhotoItem from './PhotoItem';
import PhotoNotFound from './PhotoNotFound';

/* Styles for sub elements */
const PhotoUl = styled.ul `
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
`;


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
  
  // When component first loads, call the searchFlickr function
  componentDidMount() {
    this.props.searchFlickr(this.props.searchTerm);
  }

  // When component updates compare the old and new search term, if they are the same don't re-search flickr
  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.props.searchFlickr(this.props.searchTerm);
    }
  }

  // search flickr based on the search term
  searchFlickr (searchTerm) {
    // Use axios to pull photos from flickr with tags passed down from the url
    this.props.searchFlickr(searchTerm);
  }

  render () {
    let props = this.props;
    return (
      <div className="photo-container">
        <Title>{this.props.searchTerm}</Title>
        { 
          /* if axios is loading photos still, show loading screen otherwise show the photos */
          (this.props.isLoading) ? 
          <Loading /> : 
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
        }
      </div>
    )
  }
}

PhotoContainer.proptypes = {
  searchTerm: PropTypes.string.isRequired
}


export default PhotoContainer;