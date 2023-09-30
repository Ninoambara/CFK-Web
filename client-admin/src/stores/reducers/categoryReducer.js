import {
  CATEGORY_FETCH_BYID_SUCCESS,
  CATEGORY_FETCH_FAILED,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  category: [],
  oneCategory: {},
  loading: false,
  error: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CATEGORY_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CATEGORY_FETCH_BYID_SUCCESS:
      return {
        ...state,
        oneCategory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
