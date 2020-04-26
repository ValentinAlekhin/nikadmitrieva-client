import Axios from 'axios'
import { 
  LOADING_START_P, LOADING_END_P, FETCH_PAGE_SUCCESS, 
  FETCH_PAGE_ERROR, SET_CATEGORY,
} from '../actionTypes'

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category
  }
}

export function loadingStart() {
  return {
    type: LOADING_START_P
  }
}

export function loadingEnd() {
  return {
    type: LOADING_END_P
  }
}

export function fetchPageSuccess(data) {
  return {
    type: FETCH_PAGE_SUCCESS,
    data
  }
}

export function fetchPageError(error) {
  return {
    type: FETCH_PAGE_ERROR,
    error
  }
}

export function getPage(category) {
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