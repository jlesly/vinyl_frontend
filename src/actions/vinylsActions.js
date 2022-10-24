export const addVinyl = newVinyl => {
    return dispatch => {
        fetch('http://localhost:3000/vinyls', {
                method: 'POST',
                body: JSON.stringify(newVinyl),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(resp => resp.json())
            .then(newVinyl => {
                if (newVinyl.error) {
                    alert("all fields must be filled out");
                } else {
                    dispatch({ type: 'ADD_VINYL', payload: newVinyl });
                }
            })
    }
}

export const fetchVinyls = category_id => {
    return (dispatch) => {
        fetch(`http://localhost:3000/categories/${category_id}/vinyls`)
            .then(resp => resp.json())
            .then(vinyls => dispatch({ type: 'FETCH_VINYLS', payload: vinyls }))
    }
}

export const deleteVinyl = (vinylId) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_VINYL', payload: vinylId });
        fetch(`http://localhost:3000/vinyls/${vinylId}`, {
            method: 'DELETE',
        })
    }
}

