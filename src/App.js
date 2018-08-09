// React libraries
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// Custom components
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Navigation';
import PhotoContainer from './Components/PhotoContainer';
import ErrorPage from './Components/ErrorPage';

/**
 * Main App component responsible for handling routes and redirection
 */
const App = () => 
  <BrowserRouter>
    <div className="container">
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
    </div>
  </BrowserRouter>


export default App;
