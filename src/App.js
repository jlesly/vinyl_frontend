// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import { fetchCategories } from './actions/categoriesActions'


class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div className='app'>
        <Switch>
        
          <Route path='/categories' component={ CategoriesContainer }/>
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchCategories})(App);
