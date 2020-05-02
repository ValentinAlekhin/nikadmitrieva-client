import { combineReducers } from 'redux'
import { PortfolioReducer } from './portfolio/portfolioReducer'
import { LoginReducer } from './login/loginReducer'
import { GallaryReducer } from './gallery/galleryReducer'
import { MainPagesReducer } from './mainPages/mainPagesReducer'

export default combineReducers({
  mainPages: MainPagesReducer,
  portfolio: PortfolioReducer,
  login: LoginReducer,
  gallery: GallaryReducer,
})