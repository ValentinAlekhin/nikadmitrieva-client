import React from 'react'
import classes from './GalleryItem.module.scss'
import { connect } from 'react-redux'
import ImgControlPanel from '../ImgControlPanel/ImgControlPanel'

const GalleryItem = ({
  img, isLogin
}) => (
  <div className={classes.GalleryItem}>
    { isLogin && <ImgControlPanel /> }
    <picture>
      <source srcSet={img.webp} type="image/webp" />
      <source srcSet={img.jpg} type="image/jpg" />
      <img className={classes.Img} src={img.jpg} alt="Gallery Item"/>
    </picture>
  </div>
)

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
  }
}

export default connect(mapStateToProps)(GalleryItem)