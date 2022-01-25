import React from 'react';
import { connect } from 'react-redux';
import VinylContainer from '../containers/VinylContainer'

const VinylContainer = (props) => {
        const {artist, album, year, image_url} = props
        return (
            <div className="vcontainer">
                <h3>{artist}</h3>
                <h3>{album}</h3>
                <h3>{year}</h3>
                <img src={image_url}/>
            </div>
        )}


export default VinylContainer