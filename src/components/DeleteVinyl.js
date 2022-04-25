import React from 'react';
import { connect } from 'react-redux';
import { deleteVinyl } from '../actions/vinylsActions';
import Button from 'react-bootstrap/Button'

const DeleteVinyl = (props) => {
    
    const handleDelete = (vinylCat) => {
        props.deleteVinyl(vinylCat.id, vinylCat.category_id)
    }

    let vinylCat = props.vinylCat

    return (
        <Button variant="primary" size="sm" onClick={() => handleDelete(vinylCat)}>Delete</Button>
    )
}

export default connect(null, {deleteVinyl})(DeleteVinyl)