import React from 'react'
import { LoginSate } from "./login/loginState"

export const RootState = ({children}) => (
  <LoginSate>
    { children }
  </LoginSate>
) 