import React, { useReducer } from 'react'
import { LoginContext } from "./loginContext"
import { LoginReducer } from './loginReducer'
import { 
  HIDE_LOGIN, SHOW_LOGIN, LOADING_START, 
  LOADING_END, LOGIN, LOGOUT 
} from '../types'
import Axios from 'axios'

export const LoginSate = ({children}) => {

  const initialState = {
    isOpen: false,
    loading: false,
    isLogin: true,
  }

  const [state, dispatch] = useReducer(LoginReducer, initialState)

  const hide = () => dispatch({ type: HIDE_LOGIN })
  const show = () => dispatch({ type: SHOW_LOGIN })
  const loadingStart = () => dispatch({ type: LOADING_START })
  const loadingEnd = () => dispatch({ type: LOADING_END })
  const signIn = (token, userId) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)

    dispatch({ type: LOGIN })
  }
  const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')

    dispatch({ type: LOGOUT })
  }

  const auth = async (login, password) => {
    loadingStart()
    try {
      const form = { login, password }
      const response = await Axios.post('/api/auth/login', form)
      loadingEnd() 
      
      const { token, userId } = response.data
      
      if (!token && !userId) return

      signIn(token, userId)
      hide()
    } catch (err) {
      loadingEnd()
      console.log(err)
    }
  }

  const { isOpen, loading, isLogin } = state

  return (
    <LoginContext.Provider value={{
      hide, show, isOpen,
      loading, auth, isLogin,
      signIn, signOut 
    }}>
      { children }
    </LoginContext.Provider>
  )
}