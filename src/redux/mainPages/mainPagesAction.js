import { 
  LOADING_START_MP, LOADING_END_MP, FETCH_INDEX_PAGE_SUCCESS
} from "./actionTypes"
import Axios from "axios"


export const loadingStart = () => ({ type: LOADING_START_MP })

export const loadingEnd = () => ({ type: LOADING_END_MP })

export const getIndexPage = () => {
  return async dispatch => {
    dispatch(loadingStart)
    try {
      const response = await Axios.get('/api/main-pages/index')

      dispatch({ type: FETCH_INDEX_PAGE_SUCCESS, data: response.data})
    } catch (err) {
      console.log(err)
    }
  }
}

export const addCardToIndexPage = id => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const response = await Axios.post('/api/main-pages/add-card-to-index', { id })
      console.log(response)
      dispatch(loadingEnd())
    } catch (err) {
      dispatch(loadingEnd())
      console.log(err)
    }
  }
}