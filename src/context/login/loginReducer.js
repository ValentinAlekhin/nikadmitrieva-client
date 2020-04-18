import { HIDE_LOGIN, SHOW_LOGIN } from "../types"

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case HIDE_LOGIN:
      return {
        ...state, 
        isOpen: false
      }
    case SHOW_LOGIN:
      return {
        ...state,
        isOpen: true
      }
    default:
      return state
  }
}