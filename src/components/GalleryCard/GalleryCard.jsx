import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './GalleryCard.module.scss'
import { connect } from 'react-redux'
import { useState } from 'react'
import ImgControlPanel from '../ImgControlPanel/ImgControlPanel'
import { removeCard } from '../../redux/portfolio/portfolioAction'

const GalleryCard = ({
  img, link, title, 
  isLogin, id, removeCard,
}) => {

  const [hover, setHover] = useState(false)

  const handleDubleClick = () => {
    removeCard(id)
  }

  return (
    <div 
      className={classes.GalleryCard}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      { isLogin && <ImgControlPanel 
        show={hover} 
        id={id}
        onDoubleClick={handleDubleClick}
      /> }
      <NavLink 
        className={classes.ImgContainer} 
        to={link} 
        >
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

function mapDispatchToProps(dispatch) {
  return {
    removeCard: id => dispatch(removeCard(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryCard)