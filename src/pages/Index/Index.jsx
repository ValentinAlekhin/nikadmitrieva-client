import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import classes from './Index.module.scss'
import GallaryCard from '../../components/GalleryCard/GalleryCard'

export default class Index extends Component {
  

  render() {
    return (
      <div className={classes.IndexContainer}>
        <Parallax bgImage={getRandomParallaxImg(0, 3)} strength={200}>
           <div className={classes.Parallax} />
        </Parallax>
        <div className={classes.CardsContainer}>
          {/* { this.state.gallaryCards.map(({route, title, imgArr}, index) => (
            <GallaryCard
              key={index}
              title={title}
              img={imgArr[0]}
              link={route}
              />
          )) } */}
        </div>
      </div>
    )    
  }
}

function getRandomParallaxImg(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return require(`../../data/compressed/parallax/${Math.floor(rand)}.jpg`);
}