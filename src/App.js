// import logo from './logo.svg';
import './App.css';
// import { Switch, Route } from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import { fetchCategories } from './actions/categoriesActions'
import VinylFormContainer from './containers/VinylFormContainer';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <ol>
              <Link to='/'>Home</Link>
              <Link to='/vinyls/new'>Add a Vinyl</Link>
            </ol>
          </ul>
        </div>
        <Switch>
          <Route exact path='/'>< Home /></Route>
          <Route exact path='/vinyls/new' component={ VinylFormContainer } />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, { fetchCategories})(App);
