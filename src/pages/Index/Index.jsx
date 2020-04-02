import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import parallaxImg from './parallax.jpg'
import classes from './Index.module.scss'
import GallaryCard from '../../components/GalleryCard/GalleryCard'
import Store from '../../store/store'

export default class Index extends Component {
  state = {
    gallaryCards: Store.getIndexPageCards(
      'Наброски',
      'Натюрморты',
      'Цветы', 
      'Натюрморт с бутылкой', 
      'Фата', 
      'Пыль', 
      'Офорт', 
      'Композиция', 
      'Пленер'
    )
  }

  render() {
    return (
      <div className={classes.IndexContainer}>
        <Parallax bgImage={parallaxImg} strength={200}>
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