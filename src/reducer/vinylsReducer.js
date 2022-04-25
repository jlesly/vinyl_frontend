export const vinylsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VINYLS':
            return action.payload
        case 'ADD_VINYLS':
            return [...state, action.payload]
        case 'DELETE_VINYL':
            return state.filter(vinyl => vinyl.id !== action.payload)
        default:
            return state;
    }
}