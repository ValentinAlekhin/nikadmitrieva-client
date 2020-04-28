import React from 'react'
import classes from './GalleryItem.module.scss'
import { connect } from 'react-redux'
import ImgControlPanel from '../ImgControlPanel/ImgControlPanel'
import { useState } from 'react'
import { removeImg } from '../../redux/gallery/galleryAction'

const GalleryItem = ({
  img, isLogin, removeImg
}) => {
  const [show, setShow] = useState(false)

  const handleDubleClick = () => {
    removeImg(img.id)
  }

  return (
    <div 
      className={classes.GalleryItem}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      { isLogin && <ImgControlPanel show={show} isLogin={isLogin} onDoubleClick={handleDubleClick}/> }
      <picture>
        <source srcSet={img.path.webp} type="image/webp" />
        <source srcSet={img.path.jpg} type="image/jpg" />
        <img className={classes.Img} src={img.path.jpg} alt="Gallery Item"/>
      </picture>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeImg: id => dispatch(removeImg(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem)