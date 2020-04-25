import React from 'react'
import { LoginSate } from "./login/loginState"
import { PortfolioState } from './portfolio/potfolioState'

export const RootState = ({children}) => (
  <LoginSate>
    { children }
  </LoginSate>
) 