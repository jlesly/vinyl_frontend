export const addVinyl = newVinyl => {
    return dispatch => {
        fetch('http://localhost:3000/vinyls', {
            method: 'POST',
            body: JSON.stringify(newVinyl),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(newVinyl => dispatch({ type: 'ADD_VINYL', payload: newVinyl }))
    }
}