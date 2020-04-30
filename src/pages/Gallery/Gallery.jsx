import React, { useRef, useEffect } from 'react'
import classes from './Gallery.module.scss'
import { connect } from 'react-redux'
import { getPage, createGrid, setImages } from '../../redux/gallery/galleryAction'
import AddImg from '../../components/AddImg/AddImg'
import GalleryItem from '../../components/GalleryItem/GalleryItem'

const Gallery = ({
  data: { title, description },
  loading, isLogin, match, getPage,
  createGrid, images, collsHeight
}) => {

  const propsCategory = match.params.category
  const propsGallery = match.params.gallery
  const containerWitdth = useRef(null)

  useEffect(() => {
    (async function() {
      await getPage(propsCategory, propsGallery)
    })()
    createGrid(window.innerWidth, containerWitdth.current.offsetWidth, 20)
    window.addEventListener('resize', () => {
      console.log('resize')
      createGrid(window.innerWidth, containerWitdth.current.offsetWidth, 20)
      setImages()
    })
    // eslint-disable-next-line
  }, [])

  if(loading) return (
    <div className={classes.Gallery}>
      <p>Загрузка</p>
      <div className={classes.Grid} ref={containerWitdth}></div>
    </div>
  )

  return (
    <div className={classes.Gallery}>
      <h4 className={classes.Title}>
        { title }
      </h4>
      { description && <p>{ description }</p> }
      <div 
        className={classes.Grid} 
        ref={containerWitdth}
        style={{height: collsHeight}}
      >
        { images.map(img => <GalleryItem key={img.id} img={img} isLogin={isLogin}/>) }
      </div>
      { isLogin && <AddImg category={propsCategory} gallery={propsGallery} /> }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loading: state.gallery.loading,
    isLogin: state.login.isLogin,
    images: state.gallery.grid.images,
    collsHeight: state.gallery.grid.collsHeight,
    data: state.gallery.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: (category, title) => dispatch(getPage(category, title)),
    createGrid: (windowWitdth, containerWitdth, gap) => dispatch(createGrid(windowWitdth, containerWitdth, gap)),
    setImages: () => dispatch(setImages()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)