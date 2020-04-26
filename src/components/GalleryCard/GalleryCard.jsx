import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './GalleryCard.module.scss'
import { connect } from 'react-redux'

const GalleryCard = ({
  img, link, title, isLogin
}) => {

  return (
    <div className={classes.GalleryCard}>
      <NavLink className={classes.ImgContainer} to={link}>
        <picture className={classes.ImgItem}>
          <source srcSet={img.webp} type="image/webp"/>
          <source srcSet={img.jpg} type="image/jpg"/>
          <img className={classes.ImgItem} src={img.jpg} alt={title}/>
        </picture>
      </NavLink>
      <NavLink className={classes.GalerryTitle} to={link}>
        <span>
          { title }
        </span>
      </NavLink>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
  }
}

export default connect(mapStateToProps)(GalleryCard)