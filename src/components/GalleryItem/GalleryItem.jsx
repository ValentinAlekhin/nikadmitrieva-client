import React from 'react'
import classes from './GalleryItem.module.scss'

export default props => (
  <div className={classes.GalleryItem}>
    <img className={classes.Img} src={props.img} alt="Gallery Item"/>
  </div>
)