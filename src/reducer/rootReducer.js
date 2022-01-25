import { combineReducers } from "redux";
import { vinylsReducer } from "./vinylsReducer";
import { categoriesReducer } from "./categoriesReducer"

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    vinyls: vinylsReducer
})