
const initialState = {
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
 indexPage: {
   parallax: {},
   cards: []
 }
}

export const MainPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}