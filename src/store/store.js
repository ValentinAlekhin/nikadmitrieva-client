class WorskStorage {
  constructor() {
    this.portfolio = {
      drawing: {
        title: 'Графика',
        works: {
          outline: {
            title: 'Наброски',
            data: 10
          },
          pleinAirDraw: {
            title: 'Пленер',
            data: 6
          },
          stillLifeDraw: {
            title: 'Академический рисунок',
            data: 5
          },

        }
      },
      painting: {
        title: 'Акварель', 
        works: {
          stillLife: {
            title: 'Натюрморты',
            data: 8
          },
          pleinAir: {
            title: 'Пленер',
            data: 13
          },
          flowers: {
            title: 'Цветы',
            data: 12
          },
          portraits: {
            title: 'Портреты',
            data: 5
          },
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
            data: 9,
          },
          fata: {
            title: 'Фата',
            data: 9,
          },
          christmas: {
            title: 'Гирлянды',
            data: 3,
          },
          dust: {
            title: 'Пыль',
            data: 7,
          },
          love: {
            title: 'Любовь',
            data: 10 
          },
          mother: {
            title: 'Мама',
            data: 3
          },
          father: {
            title: 'Папа',
            data: 2
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
          },
          copy: {
            title: 'Копии',
            data: 4
          },
          sculpture: {
            title: 'Скульптуры',
            data: 4
          },
        }
      }     
    }
    
    this.allGalleries = this.getGallaries()
  }

  getPortfolioCardsByCategory(category) {
    return (
      Object.entries(this.portfolio[category].works).map(([key, card]) => {
        return ({
          title: card.title,
          img: require(`../data/compressed/${category}/${key}/0.jpg`),
          link: `/${key}`
        })
      })
    )
  }

  getImgArr(category, title) {
    const data = this.portfolio[category].works[title].data
    const galleryArr = []
    for (let i = 0; i < data; i++) {
      galleryArr[i] = require(`../data/compressed/${category}/${title}/${i}.jpg`)
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
      category,
      imgArr: this.getImgArr(category, page, data)
    }))
  }

  getIndexPageCards(...params) {
    const cards = []
    params.forEach(([title, category], index) => {
      this.getGallaries().forEach(card => {
        if (title === card.title && category === card.category) {
          return cards[index] = card
        }
      })
    })

    return cards
  }
}

const worksStorage = new WorskStorage();

export default worksStorage;