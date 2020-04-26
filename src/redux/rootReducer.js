import { combineReducers } from 'redux'
import { PortfolioReducer } from './portfolio/portfolioReducer'
import { LoginReducer } from './login/loginReducer'

export default combineReducers({
  portfolio: PortfolioReducer,
  login: LoginReducer,
})