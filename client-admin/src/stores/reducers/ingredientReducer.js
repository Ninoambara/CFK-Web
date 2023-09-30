import { INGREDIENTS_FETCH_FAILED, INGREDIENTS_FETCH_REQUEST, INGREDIENTS_FETCH_SUCCESS } from "../actions/actionTypes";

const initialState = {
  ingredients: [],
  error: null,
};


export default function ingredientReducer(state = initialState, action) {
    switch (action.type) {
      case INGREDIENTS_FETCH_SUCCESS:
        return {
          ...state,
          ingredients: action.payload,
        };
      case INGREDIENTS_FETCH_FAILED:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  }