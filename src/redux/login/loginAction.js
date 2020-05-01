import Axios from 'axios'
import { 
  HIDE_LOGIN, SHOW_LOGIN, LOADING_START_L, 
  LOADING_END_L, LOGIN, LOGOUT, AUTO_LOGIN
} from './actionTypes'

export const hideLogin = () => ({ type: HIDE_LOGIN })

export const showLogin = () => ({ type: SHOW_LOGIN })

export const loadingStart = () => ({ type: LOADING_START_L })

export const loadingEnd = () => ({ type: LOADING_END_L })

export const autoLogin = () => {
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token')

  return {
    type: AUTO_LOGIN,
    token, userId
  }
}

export const signIn = (token, userId) => {
  localStorage.setItem('token', token)
  localStorage.setItem('userId', userId)
  hideLogin()

  return {
    type: LOGIN,
    token, userId
  }
}

export const signOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')

  return {
    type: LOGOUT
  }
}

export const auth = (login, password) => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const form = { login, password }
      const response = await Axios.post('/api/auth/login', form)
      dispatch(loadingEnd())
  
      const { token, userId } = response.data
  
      if(!token && !userId) return
  
      dispatch(signIn(token, userId)) 
      dispatch(hideLogin()) 
    } catch (err) {
      console.log(err)
    }
  }
}