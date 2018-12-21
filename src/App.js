// React libraries
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';


// Library for styling React components inside of component itself
import styled from 'styled-components';

// Custom components
/**
 * Please place your config.js file in the "src" folder
 * and give it a default export of apiKey to get this to work
 */
import apiKey from './config';
import SearchForm from './Components/SearchForm/SearchForm';
import Navigation from './Components/Navigation/Nav';
import PhotoContainer from './Components/PhotoContainer/PhotoContainer';
import ErrorPage from './Components/ErrorPage';



/* Create styles for div.container elements */
const Container = styled.div `
  padding-top: 2em;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: #3f4850;
  @media only screen and (min-width: 768px) {
    padding-top: 4em;   
    max-width: 960px;
    margin: auto;
  }
`;

/**
 * Main App component responsible for handling routes, redirection, and managing major state
 */
class App extends Component {

  state = {
    // number of photos to pull and display at a time
    numberOfPhotos: 12,
    isLoading: true,
    // array to contain API results
    photos: [],
  };


  // search flickr based on the search term
  searchFlickr = searchTerm => {
    if (!this.state.isLoading) {
      this.setState ({
        isLoading: true
      })
    }
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

  // handle the form submission event for the searchform
  handleSubmit = (e, searchField, history) => {
    console.log(this.state.numberOfPhotos);
    e.preventDefault();
    let path = `/search/${searchField.value}`;
    searchField.value = "";
    history.push(path);
  }

  render() {
    return (
    <BrowserRouter>
      <Container>
        <Route exact path = "/" render={() => <Redirect to="/cats" />} />
        <Route path = "/search" render={ props => <SearchForm history={ props.history }  handleSubmit= { this.handleSubmit } /> }   />
        <Navigation links={['Cats', 'Dogs', 'Computers', 'Search']} />
        <Switch>
          <Route exact path = "/search" render={ () => <PhotoContainer searchTerm="cats" searchFlickr={this.searchFlickr} photos = {this.state.photos} isLoading = {this.state.isLoading} /> } />
          <Route path = "/search/:searchTag" render={ props => <PhotoContainer searchTerm={props.match.params.searchTag} searchFlickr={this.searchFlickr} photos = {this.state.photos} isLoading = {this.state.isLoading} />} />
          <Route path = "/cats" render={ () => <PhotoContainer searchTerm="cats" searchFlickr={this.searchFlickr} photos = {this.state.photos} isLoading = {this.state.isLoading} /> } />
          <Route path = "/dogs" render={ () => <PhotoContainer searchTerm="dogs" searchFlickr={this.searchFlickr} photos = {this.state.photos} isLoading = {this.state.isLoading} /> } />
          <Route path = "/computers" render={ () => <PhotoContainer searchTerm="computers" searchFlickr={this.searchFlickr} photos = {this.state.photos} isLoading = {this.state.isLoading} /> } />
          <Route component={ErrorPage} />
        </Switch>
      </Container>
    </BrowserRouter>
    )}
}

export default App;
