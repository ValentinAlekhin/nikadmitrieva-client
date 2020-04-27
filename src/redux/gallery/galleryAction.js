import Axios from "axios"
import { 
  LOADING_START_G, LOADING_END_G, FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_ERROR
} from "./actionTypes"


export const loadingStart = () => ({ type: LOADING_START_G })

export const loadingEnd = () => ({ type: LOADING_END_G })

export const fetchGallerySuccess = data => ({ type: FETCH_GALLERY_SUCCESS, data })

export const fetchGalleryError = error => ({ type: FETCH_GALLERY_ERROR, error })

export const getPage = id => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const response = await Axios.post('/api/gallery/get', {id})

      dispatch(fetchGallerySuccess(response.data))
    } catch (err) {
      dispatch(fetchGalleryError(err))
    }
  }
}