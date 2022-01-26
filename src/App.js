// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';
import { fetchCategories } from './actions/categoriesActions'
import VinylFormContainer from './containers/VinylFormContainer';
import Home from './components/Home';
import { Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className='app'>
        <NavBar/>
        <Switch> 
          <Route exact path='/' component={ Home }/>
          <Route exact path='/vinyls/new' component={ VinylFormContainer }/>
          <Route path='/categories' component={ CategoriesContainer }/>
        </Switch>
      
      </div>
    );
  }
}

export default connect(null, { fetchCategories})(App);
