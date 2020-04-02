import React from 'react'
import classes from './Portfolio.module.scss'
import GalleryCard from '../../components/GalleryCard/GalleryCard'

export default props => {

  return (
    <div className={classes.PortfolioContainer}>
      { props.cards.map(({title, img, link}, index) => (
        <GalleryCard
          key={index}
          title={title}
          img={img}
          link={link}
        />
      ))}
    </div>
  )
}