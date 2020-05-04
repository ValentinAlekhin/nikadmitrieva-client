import { 
  LOADING_START_MP, LOADING_END_MP, FETCH_INDEX_PAGE_SUCCESS, 
  SET_CURRENT_PAGE, SET_CURRENT_PATH 
} from "./actionTypes"

const initialState = {
  loading: true,
  currentPage: '/',
  currentPath: '/',
  navigation: {
    sideNavIsOpen: false,
    logoTitle: 'Ника Дмитриева',
    titles : [
      { route: '/about', title: 'Обо мне' },
      { route: '/contact', title: 'Контакты' }
    ],
    dropMenu: {
      title: 'Портфолио',
      subTitles: [
        { route: '/graphics', title: 'Графика' },
        { route: '/watercolor', title: 'Акварель' },
        { route: '/photo', title: 'Фото' },
        { route: '/other', title: 'Другое' },
      ]
    }  
 },
 indexPage: {}
}

export const MainPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PATH:
      return {
        ...state,
        currentPath: action.path
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case LOADING_START_MP:
      return {
        ...state,
        loading: true
      }
    case LOADING_END_MP:
      return {
        ...state,
        loading: false
      }
    case FETCH_INDEX_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        indexPage: action.data
      }
    default:
      return state
  }
}