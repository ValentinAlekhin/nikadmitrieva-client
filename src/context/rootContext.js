import React from 'react'
import { LoginSate } from "./login/loginState"
import { PortfolioState } from './portfolio/portfolioState'

export const RootState = ({children}) => (
  <PortfolioState>
    <LoginSate>
      { children }
    </LoginSate>
  </PortfolioState>
) 