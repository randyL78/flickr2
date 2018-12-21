// React libraries
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// Library for styling React components inside of component itself
import styled from 'styled-components';

// Custom components
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
`

/**
 * Main App component responsible for handling routes, redirection, and managing major state
 */
class App extends Component {

  state = {
    // number of photos to pull and display at a time
    numberOfPhotos: 24,
    isLoading: true,
    // array to contain API results
    photos: [],
  };

  handleSubmit = (e, searchField, history) => {
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
          <Route exact path = "/search" render={ () => <PhotoContainer searchTerm="cats"/> } />
          <Route path = "/search/:searchTag" render={ props => <PhotoContainer searchTerm={props.match.params.searchTag} />} />
          <Route path = "/cats" render={ () => <PhotoContainer searchTerm="cats"/>} />
          <Route path = "/dogs" render={ () => <PhotoContainer searchTerm="dogs"/>} />
          <Route path = "/computers" render={ () => <PhotoContainer searchTerm="computers"/> } />
          <Route component={ErrorPage} />
        </Switch>
      </Container>
    </BrowserRouter>
    )}
}

export default App;
