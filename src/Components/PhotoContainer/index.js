// React libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


// Custom compnents
/**
 * Please place your config.js file in the "src" folder
 * and give it a default export of apiKey to get this to work
 */
import apiKey from '../../config';
import PhotoList from './PhotoList';
import Loading from './Loading';


/**
 * Main container for displaying photos and handling
 * App state
 */
class PhotoContainer extends Component {
  
  // Build initial state of the component
  constructor() {
    // Changes scope of "this" from Component base class to PhotoContainer class
    super();
    this.state = {
      // number of photos to pull and display at a time
      numberOfPhotos: 24,
      isLoading: true,
      // array to contain API results
      photos: [],
    };
  }

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
    axios
      .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=${this.state.numberOfPhotos}&page=1&format=json&nojsoncallback=1`)
      .then( response => {
        this.setState({
          photos: response.data.photos.photo,
          isLoading: false,
        });
      })
      .catch( err => console.error(`There was an error parsing and fetching data: ${err}`)); 
  }

  render () {
    return (
      <div>
        <div className="photo-container">
          <h2>{this.props.searchTerm}</h2>
          {
            /* if axios is loading photos still, show loading screen otherwise show the photos */
            (this.state.isLoading) ? 
            <Loading /> : 
            <PhotoList photos={this.state.photos} />
          }
        </div>
      </div>
    )
  }
}

PhotoContainer.proptypes = {
  searchTerm: PropTypes.string.isRequired
}


export default PhotoContainer;