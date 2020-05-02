import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import classes from './Index.module.scss'
import GallaryCard from '../../components/GalleryCard/GalleryCard'
import { connect } from 'react-redux'
import { getIndexPage } from '../../redux/mainPages/mainPagesAction'

const Index = ({
  getPage, page: { cards },
  loading
}) => {
  
  useEffect(() => {
    (async function() {
      await getPage()
    })()
    // eslint-disable-next-line
  }, [])

  if (loading) return (
    <div className={classes.IndexContainer}>
      <p>Loading</p>
    </div>
  )

  return (
    <div className={classes.IndexContainer}>
      <Parallax bgImage={getRandomParallaxImg(0, 3)} strength={200}>
          <div className={classes.Parallax} />
      </Parallax>
      <div className={classes.CardsContainer}>
        { cards.map(({galleryUrl, title, path}, index) => (
          <GallaryCard
            key={index}
            title={title}
            img={path}
            link={galleryUrl}
            />
        )) }
      </div>
    </div>
  )    
}

function mapStateToProps(state) {
  return {
    page: state.mainPages.indexPage,
    loading: state.mainPages.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: () => dispatch(getIndexPage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

function getRandomParallaxImg(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return require(`../../data/compressed/parallax/${Math.floor(rand)}.jpg`);
}