const vinyls_endPoint = "http://localhost:3000/api/v1/vinyls"


export const setVinyls = () => {
    return dispatch => {
        fetch(vinyls_endPoint)
            .then(response => response.json())
            .then(vinyls => dispatch({
                type: "SET_VINYLS",
                payload: vinyls
            }))
    }
}