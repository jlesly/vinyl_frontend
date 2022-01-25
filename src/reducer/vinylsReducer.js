export const vinylsReducer = (state =[], action) => {
    switch(action.type) {
        case 'FETCH_VINYLS':
            return action.payload
        case 'ADD_VINYLS':
            return [...state, action.payload]
            default:
                return state
    }
}