import React, { useEffect, Fragment } from 'react'
import classes from './Portfolio.module.scss'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import AddGalleryCard from '../../components/AddGalleryCard/AddGalleryCard'
import { connect } from 'react-redux'
import { getPage, setCategory } from '../../redux/portfolio/portfolioAction'
import { setCurrentPage } from '../../redux/mainPages/mainPagesAction'

const Portfolio = ({
  data, loading, 
  match, getPage, isLogin,
  setCategory, category,
  setCurrentPage
}) => {

  const cat = match.params.category

  useEffect(() => {
    (async function() {
      await getPage(cat)
    })()
    setCategory(cat)
    setCurrentPage('portfolio')
    // eslint-disable-next-line
  }, [cat])


  const cards = () => {
    if (!data.length) return <p>Нет данных</p>

    return (
      data.map(({ title, titleImg, route, _id }, index) => (
        <GalleryCard
          key={index}
          title={title}
          img={titleImg}
          link={route}
          id={_id}
        />
      ))
    )
  }

  return (
    <div className={classes.PortfolioContainer}>

      { loading
        ? <p>Loading</p>
        : isLogin
          ? <Fragment>
            { cards() }
            <AddGalleryCard category={category}/>
          </Fragment>
          : cards() 
      }

    </div>
  )
}

function mapStateToProps(state) {
  return {
    category: state.portfolio.category,
    data: state.portfolio.data,
    loading: state.portfolio.loading,
    error: state.portfolio.error,
    isLogin: state.login.isLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: category => dispatch(getPage(category)),
    setCategory: category => dispatch(setCategory(category)),
    setCurrentPage: page => dispatch(setCurrentPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)