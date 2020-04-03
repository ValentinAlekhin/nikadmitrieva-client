import Store from './store'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'

class Routes {
  constructor() {
    this.nav = [
      {
        title: 'Обо мне',
        route: '/about',
        page: About,
      },
      {
        title: 'Портфолио',
        route: '#',
        page: null,
        dropMenu: Store.getPortfolioNamesAndRouts()
      },
      {
        title: 'Контакты',
        route: '/contact',
        page: Contact,
      },
    ]
  }

  getNavNameAndRouts() {
    return this.nav
  }

  getSidenavNameAndRouts() {
    const arr = []

    this.nav.forEach(el => {
      if (el.dropMenu) {
        el.dropMenu.forEach(dropEl => arr.push(dropEl))
      } else {
        arr.push(el)
      }
    })

    return arr
  }

}

const routes =new Routes()

export default routes

