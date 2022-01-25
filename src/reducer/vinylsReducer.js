const initialVinylState = {
    vinyls: []
    }

const vinylsReducer = (state = initialVinylState, action) => {
    switch(action.type){
        case "SET_VINYLS":
            return {...state, vinyls: action.payload}
    default:
        return state;
    }
}

export default vinylsReducer;