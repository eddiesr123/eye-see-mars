import { SET_EARTH_DATE } from "../actions/types";

const initialState = {
  earthDate: "",
};

export const earthDateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EARTH_DATE:
      return { ...state, earthDate: action.payload };
    default:
      return state;
  }
};
