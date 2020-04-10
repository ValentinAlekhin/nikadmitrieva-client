import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import classes from './Index.module.scss'
import GallaryCard from '../../components/GalleryCard/GalleryCard'
import Store from '../../store/store'

export default class Index extends Component {
  state = {
    gallaryCards: Store.getIndexPageCards(
      ['Копии', 'other'],
      ['Пленер', 'drawing'],
      ['Мама', 'photo'], 
      ['Натюрморты', 'painting'],
      ['Цветы', 'painting'],
      ['Папа', 'photo'],
      ['Натюрморт с бутылкой', 'photo'],
      ['Пыль', 'photo'],
      ['Настя', 'photo'],
     )
  }

  render() {
    return (
      <div className={classes.IndexContainer}>
        <Parallax bgImage={getRandomParallaxImg(0, 3)} strength={200}>
           <div className={classes.Parallax} />
        </Parallax>
        <div className={classes.CardsContainer}>
          { this.state.gallaryCards.map(({route, title, imgArr}, index) => (
            <GallaryCard
              key={index}
              title={title}
              img={imgArr[0]}
              link={route}
              />
          )) }
        </div>
      </div>
    )    
  }
}

function getRandomParallaxImg(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return require(`../../img/parallax/${Math.floor(rand)}.jpg`);
}