// import * from '../img'
// console.log(worksStorage.getC)
class WorskStorage {
  constructor() {
    this.portfolio = {
      drawing: {
        title: 'Рисунок',
        works: {
          outline: {
            title: 'Наброски',
            data: 7
          },
          pleinAirDraw: {
            title: 'Пленер',
            data: 5
          },

        }
      },
      painting: {
        title: 'Живопись', 
        works: {
          stillLife: {
            title: 'Натюрморты',
            data: 7
          },
          pleinAir: {
            title: 'Пленер',
            data: 8
          },
          flowers: {
            title: 'Цветы',
            data: 9
          }
        } 
      },
      photo: {
        title: 'Фотография',
        works: {
          bootle: {
            title: 'Натюрморт с бутылкой',
            data: 2
          },
          bathroom: {
            title: 'Натюрморт в ванной',
            data: 4
          },
          nastya: {
            title: 'Настя',
            data: 7
          },
          loft: {
            title: 'Лофт',
            data: 11
          },
          katya: {
            title: 'Катя',
            data: 8,
          },
          fata: {
            title: 'Фата',
            data: 9,
          },
          christmas: {
            title: 'Рождество',
            data: 4,
          },
          dust: {
            title: 'Пыль',
            data: 7,
          },
          love: {
            title: 'Любовь',
            data: 10 
          }
        },  
      },
      other: {
        title: 'Другое',
        works: {
          etching: {
            title: 'Офорт',
            data: 3
          },
          composition: {
            title: 'Композиция',
            data: 4
          }
        }
      }     
    }
    
    this.allGalleries = this.getGallaries()
  }

  getPortfolioCardsByCategory(category) {
    return (
      Object.entries(this.portfolio[category].works).map(([key, card]) => {
        // console.log(key)
        return ({
          title: card.title,
          img: require(`../img/${category}/${key}/0.jpg`),
          link: `/${key}`
        })
      })
    )
  }

  getImgArr(category, title, data) {
    const galleryArr = []
    for (let i = 0; i < data; i++) {
      galleryArr[i] = require(`../img/${category}/${title}/${i}.jpg`)
    }
    return galleryArr
  }

  getPortfolioNamesAndRouts() {
    return Object.entries(this.portfolio).map(([key, value]) => ({
      route: `/${key}`,
      title: value.title,
      page: key,
    }))
  }

  getAllWorks() {
    const allWorks = []
    
    Object.entries(this.portfolio)
      .forEach(([category, value]) => {
        Object.entries(value.works).forEach(([page ,val]) => allWorks.push({...val, category, page}))
      })

    return allWorks
  }

  getGallaries() {
    return this.getAllWorks().map(({page, category, data, title}) => ({
      route: `/${page}`,
      title,
      page,
      imgArr: this.getImgArr(category, page, data)
    }))
  }

  getIndexPageCards(...params) {
    return this.allGalleries.filter(({title}) => {
      let ok = null
      params.forEach(par => {
        if (par === title) return ok = true
      })
      return ok
    })
  }
}

const worksStorage = new WorskStorage();

console.log(worksStorage.getIndexPageCards('Наброски', 'Натюрморты', 'Цветы', 'Натюрморт с бутылкой', 'Фата', 'Пыль', 'Офорт', 'Композиция', 'Пленер'))

export default worksStorage;