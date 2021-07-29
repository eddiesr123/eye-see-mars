import photosApi from "../apis/api";
import {
  API_KEY,
  CAMERA_KEY,
  CURIOSITY_PHOTOS,
  EARTH_DATE_KEY,
  PAGE_KEY,
} from "../constants";
import {
  SET_EARTH_DATE,
  SET_CAMERA,
  FETCH_PHOTOS_PENDING,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILED,
} from "./types";

export const setEarthDate = (date) => {
  return {
    type: SET_EARTH_DATE,
    payload: date,
  };
};

export const setCamera = (camera) => {
  return {
    type: SET_CAMERA,
    payload: camera,
  };
};

export const fetchPhotos =
  (earthDate = "", camera) =>
  async (dispatch) => {
    const queryByCamera = `&${CAMERA_KEY}${camera}`;
    dispatch({ type: FETCH_PHOTOS_PENDING });
    try {
      const response = await photosApi.get(
        `${CURIOSITY_PHOTOS}${API_KEY}&${EARTH_DATE_KEY}${earthDate}&${PAGE_KEY}1${
          camera ? queryByCamera : ""
        }`
      );

      dispatch({
        type: FETCH_PHOTOS_SUCCESS,
        payload: response.data.photos,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PHOTOS_FAILED,
        payload: error,
      });
    }
  };
