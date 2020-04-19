import { HIDE_LOGIN, SHOW_LOGIN, LOADING_START, LOADING_END, LOGIN, LOGOUT } from "../types"

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case HIDE_LOGIN:
      return {
        ...state, 
        isOpen: false,
      }
    case SHOW_LOGIN:
      return {
        ...state,
        isOpen: true,
      }
    case LOADING_START:
      return {
        ...state,
        loading: true,
      }
    case LOADING_END:
      return {
        ...state,
        loading: false,
      }
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      }
    default:
      return state
  }
}