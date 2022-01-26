import React from 'react';

const VinylItem = ({vinylItem}) => {
    return (
        <div className='vinyl_item'>
            <h1>{vinylItem.artist}</h1> 
            
        </div>
    )
}

export default VinylItem;