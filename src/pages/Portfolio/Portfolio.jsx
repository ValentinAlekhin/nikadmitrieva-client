import React, { useEffect, Fragment } from 'react'
import classes from './Portfolio.module.scss'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import AddGalleryCard from '../../components/AddGalleryCard/AddGalleryCard'
import { connect } from 'react-redux'
import { getPage } from '../../redux/portfolio/portfolioAction'

const Portfolio = ({
  data, error, loading, 
  match, getPage, isLogin
}) => {

  const category = match.params.category

  useEffect(() => {
    (async function() {
      await getPage(category)
    })()
    // eslint-disable-next-line
  }, [category])

  return (
    <div className={classes.PortfolioContainer}>

      { loading
        ? <p>Loading</p>
        : isLogin
          ? <Fragment>
            { data.map(({title, imgUrl, galleryUrl}, index) => (
              <GalleryCard
                key={index}
                title={title}
                img={imgUrl}
                link={galleryUrl}
              />
            )) }
          <AddGalleryCard category={category}/>
        </Fragment>
          : data.map(({title, imgUrl, galleryUrl}, index) => (
            <GalleryCard
              key={index}
              title={title}
              img={imgUrl}
              link={galleryUrl}
            />
          )) }

    </div>
  )
}

function mapStateToProps(state) {
  return {
    data: state.portfolio.data,
    loading: state.portfolio.loading,
    error: state.portfolio.error,
    isLogin: state.login.isLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: category => dispatch(getPage(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)