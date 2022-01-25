// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import { fetchCategories } from './actions/categoriesActions'
import VinylFormContainer from './containers/VinylFormContainer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className='app'>
        <Switch> 
          <Route exact path='/' component={ Home }/>
          <Route exact path='/vinyls/new' component={ VinylFormContainer }/>
          <Route path='/categories' component={ CategoriesContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchCategories})(App);
