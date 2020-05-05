import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import classes from './Portfolio.module.scss'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import AddGalleryCard from '../../components/AddGalleryCard/AddGalleryCard'
import { connect } from 'react-redux'
import { getPage, setCategory } from '../../redux/portfolio/portfolioAction'
import { setCurrentPage, setCurrentPath } from '../../redux/navigation/navigationAction'
import { BarLoader } from 'react-spinners'

const Portfolio = ({
  data, loading, 
  match, getPage, isLogin,
  setCategory, category,
  setCurrentPage, setCurrentPath
}) => {

  const cat = match.params.category
  const location = useLocation()

  useEffect(() => {
    (async function() {
      await setCurrentPath(location.pathname)
      await getPage()
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
        ? <BarLoader css={{ width: '100%' }}/>
        : isLogin
          ? <div className={classes.CardsContainer}>
              { cards() }
              <AddGalleryCard category={category}/>
            </div>
          : <div className={classes.CardsContainer}>{ cards() }</div> 
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
    setCurrentPath: path => dispatch(setCurrentPath(path)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)