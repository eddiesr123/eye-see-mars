import { SET_CAMERA } from "../actions/types";

const initialState = {
  camera: "",
};

export const cameraReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CAMERA:
      return { ...state, camera: action.payload };
    default:
      return state;
  }
};
