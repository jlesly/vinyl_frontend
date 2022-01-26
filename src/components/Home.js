import React from 'react';
import CategoriesContainer from '../containers/CategoriesContainer';

const Home = () => {
    return (
        <>
        <div className='home'>
        <h1>Welcome to Vinyl17!</h1>
        <p>Check out the vinyl collection</p>
        </div>
        < CategoriesContainer />
        </>
    )
}

export default Home;