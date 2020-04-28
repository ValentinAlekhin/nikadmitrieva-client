import React from 'react'
import classes from './GalleryGrid.module.scss'
import { GalleryGridState } from './context/galleryGridState'

export default ({}) => {

  return (
    <GalleryGridState>
      <div className={classes.GalleryGrid}>

      </div>
    </GalleryGridState>
  )
}