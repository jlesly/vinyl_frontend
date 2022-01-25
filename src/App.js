// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import { fetchCategories } from './actions/categoriesActions'
import VinylFormContainer from './containers/VinylFormContainer';



class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <div className='app'>
       < CategoriesContainer/>
       <VinylFormContainer/>
      </div>
    );
  }
}

export default connect(null, { fetchCategories})(App);
