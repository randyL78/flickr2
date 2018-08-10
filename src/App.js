// React libraries
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// Library for styling React components inside of component itself
import styled from 'styled-components';

// Custom components
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Navigation';
import PhotoContainer from './Components/PhotoContainer';
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
 * Main App component responsible for handling routes and redirection
 */
const App = () => 
  <BrowserRouter>
    <Container>
      <Route exact path = "/" render={() => <Redirect to="/cats" />} />
      <Route path = "/search" component={SearchForm} />
      <Navigation />
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


export default App;
