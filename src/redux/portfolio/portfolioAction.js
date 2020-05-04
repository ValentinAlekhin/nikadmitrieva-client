import Axios from 'axios'
import { 
  LOADING_START_P, LOADING_END_P, FETCH_PAGE_SUCCESS, 
  FETCH_PAGE_ERROR, SET_CATEGORY,
} from './actionTypes'
import formData from 'form-data'

export const setCategory = category => ({ type: SET_CATEGORY, category })

export const loadingStart = () => ({ type: LOADING_START_P })

export const loadingEnd = () => ({ type: LOADING_END_P })

export const fetchPageSuccess = data => ({ type: FETCH_PAGE_SUCCESS, data })

export const fetchPageError = error => ({ type: FETCH_PAGE_ERROR, error })

export const getPage = category => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const response = await Axios.post('/api/category/get', {category})

      dispatch(fetchPageSuccess(response.data.cards))
    } catch (err) {
      dispatch(fetchPageError(err))
    }
  }
}

export const addCard = (category, title, img) => {
  return async (dispatch, getState) => {
    dispatch(loadingStart())
    const { userId, token } = getState().login

    const cardData = {
      category, title, userId
    }
    try {
      const cardResponse = await Axios.post('api/category/add-card', cardData, { headers: {
        'Authorization': `Bearer ${token} ${userId}`,
      } })

      if (cardResponse.status === 401) return
      const { id } = cardResponse.data

      let imgData = new formData()
      imgData.append('img', img, id)

      await Axios.post('api/category/add-title-img', imgData, { headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${imgData._boundary}`,
        'Authorization': `Bearer ${token} ${userId}`,
      } })

      await dispatch(getPage(category))
    } catch (err) {
      dispatch(loadingEnd())
    }
  }
}

export const removeCard = id => {
  console.log('port')
  return async (dispatch, getState) => {
    dispatch(loadingStart())
    const { userId, token } = getState().login
    try {
      await Axios.post('api/category/remove', { id, userId }, { headers: {
        'Authorization': `Bearer ${token} ${userId}`,
      } })
      const category = getState().category
      dispatch(getPage(category))
    } catch (err) {
      dispatch(loadingEnd())
      console.log(err)
    }
  }
}