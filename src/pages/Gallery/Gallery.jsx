import React, { Component } from 'react'
import classes from './Gallery.module.scss'
import GalleryItem from '../../components/GalleryItem/GalleryItem'
import { connect } from 'react-redux'
import { getPage } from '../../redux/gallery/galleryAction'
import AddImg from '../../components/AddImg/AddImg'
import { useEffect } from 'react'

const Gallery = ({
  data: { images, title, description },
  loading, isLogin, match, getPage
}) => {

  const propsCategory = match.params.category
  const propsGallery = match.params.gallery

  useEffect(() => {
    (async function() {
      await getPage(propsCategory, propsGallery)
    })()
    // eslint-disable-next-line
  }, [])

  if(loading) return (
    <div className={classes.Gallery}>
      <p>Загрузка</p>
    </div>
  )

  return (
    <div className={classes.Gallery}>
      <h4 className={classes.Title}>
        { title }
      </h4>
      <div className={classes.Grid}>
        { images.map(img => <GalleryItem key={img.id} img={img} isLogin={isLogin}/>) }
        { isLogin && <AddImg category={propsCategory} gallery={propsGallery} /> }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loading: state.gallery.loading,
    data: state.gallery.data,
    isLogin: state.login.isLogin,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: (category, title) => dispatch(getPage(category, title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)