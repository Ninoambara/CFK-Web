import {combineReducers} from "redux"
import itemReducer from "./itemsReducer"
import ingredientReducer from "./ingredientReducer"

const rootReducer = combineReducers({
    product: itemReducer,
    ingredient: ingredientReducer
})

export default rootReducer