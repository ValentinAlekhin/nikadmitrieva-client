import Axios from "axios"
import { 
  LOADING_START_G, LOADING_END_G, FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_ERROR, SET_GALLERY_ID
} from "./actionTypes"
import FormData from 'form-data'

export const setGalleryId = id => ({ type: SET_GALLERY_ID, id })

export const loadingStart = () => ({ type: LOADING_START_G })

export const loadingEnd = () => ({ type: LOADING_END_G })

export const fetchGallerySuccess = data => ({ type: FETCH_GALLERY_SUCCESS, data })

export const fetchGalleryError = error => ({ type: FETCH_GALLERY_ERROR, error })

export const getPage = (category, gallery) => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const response = await Axios.post('/api/gallery/get', { category, titleUrl: gallery })

      dispatch(fetchGallerySuccess(response.data.gallery))
    } catch (err) {
      dispatch(fetchGalleryError(err))
    }
  }
}

export const addImg = (category, gallery, images) => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const fileName = `${category}_${gallery}`

      const formData = new FormData()
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i], `${fileName}_${i}`)
      }
      
      await Axios.post('/api/gallery/add-img', formData, { headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      } })

      dispatch(getPage(category, gallery))
    } catch (err) {
      console.log(err)
    }
  }
}