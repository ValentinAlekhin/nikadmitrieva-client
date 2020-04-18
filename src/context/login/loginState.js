import React, { useReducer } from 'react'
import { LoginContext } from "./loginContext"
import { LoginReducer } from './loginReducer'
import { HIDE_LOGIN, SHOW_LOGIN } from '../types'

export const LoginSate = ({children}) => {

  const initialState = {
    isOpen: false,
  }

  const [state, dispatch] = useReducer(LoginReducer, initialState)

  const hide = () => dispatch({ type: HIDE_LOGIN })
  const show = () => dispatch({ type: SHOW_LOGIN })

  const { isOpen } = state

  return (
    <LoginContext.Provider value={{
      hide, show, isOpen
    }}>
      { children }
    </LoginContext.Provider>
  )
}