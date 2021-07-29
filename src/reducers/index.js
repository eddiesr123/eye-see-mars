import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";
import { earthDateReducer } from "./earthDateReducer";
import { cameraReducer } from "./cameraReducer";

export default combineReducers({
  photosReducer,
  earthDateReducer,
  cameraReducer,
});
