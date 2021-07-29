import {
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_PENDING,
  FETCH_PHOTOS_FAILED,
} from "../actions/types";

const initialState = {
  photos: [],
  isPending: false,
  error: {},
};

export const photosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PHOTOS_PENDING:
      return { ...state, isPending: true };
    case FETCH_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isPending: false };
    case FETCH_PHOTOS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
