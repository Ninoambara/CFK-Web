import {
  ITEM_FETCH_BYID_SUCCESS,
  ITEM_FETCH_FAILED,
  ITEM_FETCH_REQUEST,
  ITEM_FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  products: [],
  oneProduct: '',
  loading: false,
  error: null,
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ITEM_FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case ITEM_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ITEM_FETCH_BYID_SUCCESS:
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
