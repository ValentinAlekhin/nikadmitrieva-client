import { combineReducers } from 'redux'
import { PortfolioReducer } from './portfolio/portfolioReducer'
import { LoginReducer } from './login/loginReducer'
import { GallaryReducer } from './gallery/galleryReducer'
import { PagesReducer } from './pages/pagesReducer'
import { NavigationReducer } from './navigation/navigationReducer'

export default combineReducers({
  navigation: NavigationReducer,
  pages: PagesReducer,
  portfolio: PortfolioReducer,
  gallery: GallaryReducer,
  login: LoginReducer,
})