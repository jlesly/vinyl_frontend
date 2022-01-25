import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
    return ( <
        div className = 'categories' >
        <
        h3 > Categories List < /h3> {
            categories.map(category => < div key = { category.id } >
                <
                p >
                <
                Link to = { '/categories/${category.id}/vinyls' } >
                <
                button > { category.name } < /button> <
                /Link> <
                /p> <
                /div>
            )
        } <
        /div>
    );
};

const mapStateToProps = stateFromStore => {
    return { categories: stateFromStore.categories }
}


export default connect(mapStateToProps)(Categories);