import { combineReducers } from 'redux'
import { PortfolioReducer } from './portfolio/portfolioReducer'
import { LoginReducer } from './login/loginReducer'
import { GallaryReducer } from './gallery/galleryReducer'
import { MainPagesReducer } from './mainPages/mainPagesReducer'
import { NavigationReducer } from './navigation/navigationReducer'

export default combineReducers({
  mainPages: MainPagesReducer,
  portfolio: PortfolioReducer,
  login: LoginReducer,
  gallery: GallaryReducer,
  navigation: NavigationReducer,
})