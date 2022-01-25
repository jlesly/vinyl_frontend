export const vinylsReducer = (state =[], action) => {
    switch(action.type) {
        case 'FETCH_VINYLS':
            return action.payload
            default:
                return state
    }
}