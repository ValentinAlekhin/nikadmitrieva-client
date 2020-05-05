import React, { useState } from 'react'
import classes from './GalleryItem.module.scss'
import { connect } from 'react-redux'
import ImgControlPanel from '../../UI/ImgControlPanel/ImgControlPanel'
import { removeImg } from '../../redux/gallery/galleryAction'

const GalleryItem = ({
  img: { id, path, sizes, position },
  isLogin,
}) => {

  const [show, setShow] = useState(false)

  const style = {
    top: position.top,
    left: position.left,
    width: sizes.width,
    height: sizes.height
  }

  return (
    <div 
      className={classes.GalleryItem}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={style}
    >
      { isLogin && <ImgControlPanel show={show} id={id}/> }
      <picture className={classes.Img}>
        <source srcSet={path.webp} type="image/webp" />
        <source srcSet={path.jpg} type="image/jpg" />
        <img className={classes.Img} src={path.jpg} alt="Gallery Item"/>
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