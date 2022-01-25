import React from "react";
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux'
import Categories from '../components/Categories'

class CategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }
    render() {
        return (
            <div>
                categoreis container here
            </div>
        )
    }
}

export default connect(null, {fetchCategories})(CategoriesContainer);