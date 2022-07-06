import counterReducer from "./counter"
import favouriteReducer from "./favourite"
import { combineReducers } from "redux"

const reducer = combineReducers({
    counter :counterReducer,
    favourites : favouriteReducer})
export default reducer