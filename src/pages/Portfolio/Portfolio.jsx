import React, { useContext, useEffect } from 'react'
import classes from './Portfolio.module.scss'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import { LoginContext } from '../../context/login/loginContext'
import AddGalleryCard from '../../components/AddGalleryCard/AddGalleryCard'
import { connect } from 'react-redux'
import { getPage, setCategory } from '../../redux/portfolio/portfolioAction'

const Portfolio = ({data, error, loading, match, getPage, setCategory}) => {

  const category = match.params.category

  const { isLogin } = useContext(LoginContext)

  useEffect(() => {
    (async function() {
      // await getPage(category)
    })()
    setCategory(category)

    // eslint-disable-next-line
  }, [])

  return (
    <div className={classes.PortfolioContainer}>

      { loading
        ? <p>Loading</p>
        : data.map(({title, imgUrl, galleryUrl}, index) => (
          <GalleryCard
            key={index}
            title={title}
            img={imgUrl}
            link={galleryUrl}
          />
        )) }

      { isLogin && <AddGalleryCard category={category}/> }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    data: state.portfolio.data,
    loading: state.portfolio.loading,
    error: state.portfolio.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: category => dispatch(getPage(category)),
    setCategory: category => dispatch(setCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)