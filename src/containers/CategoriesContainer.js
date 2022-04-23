import React from "react";
import { fetchCategories } from '../actions/categoriesActions';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import VinylsContainer from "./VinylsContainers";
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }
    render() {
        return (
            <Container>
                <Switch>
                    <Route path='/categories/:id/vinyls' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const category = this.props.categories.find(c => c.id === id)
                        console.log(routeInfo)
                        return !!category ? <VinylsContainer routeInfo={routeInfo} category={category}/> :
                        <div>Loading...</div>
                    } } />
                    <Route exact path='/' component={ Categories } />
                    <Route exact path='/categories' component={ Categories } />
                </Switch>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer);