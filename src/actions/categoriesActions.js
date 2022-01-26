export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(resp => resp.json())
        .then(categories => dispatch({
            type: 'FETCH_CATEGORIES', 
            payload: categories}))
    }
}