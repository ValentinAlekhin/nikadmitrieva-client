import { combineReducers } from 'redux'
import { PortfolioReducer } from './portfolio/portfolioReducer'

export default combineReducers({
  portfolio: PortfolioReducer
})