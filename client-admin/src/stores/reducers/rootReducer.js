import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import itemReducer from "./itemsReducer";
import ingredientReducer from "./ingredientReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: itemReducer,
  ingredient: ingredientReducer
});

export default rootReducer;
