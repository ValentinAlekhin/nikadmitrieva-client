import { combineReducers } from 'redux'
import { PortfolioReducer } from './portfolio/portfolioReducer'
import { LoginReducer } from './login/loginReducer'
import { GallaryReducer } from './gallery/galleryReducer'

export default combineReducers({
  portfolio: PortfolioReducer,
  login: LoginReducer,
  gallery: GallaryReducer,
})