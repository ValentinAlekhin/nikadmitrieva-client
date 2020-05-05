import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import classes from './Portfolio.module.scss'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import AddGalleryCard from '../../components/AddGalleryCard/AddGalleryCard'
import { connect } from 'react-redux'
import { setCategory } from '../../redux/portfolio/portfolioAction'
import { getPortfolioPage } from '../../redux/pages/pagesAction'
import { setCurrentPage, setCurrentPath } from '../../redux/navigation/navigationAction'
import { BarLoader } from 'react-spinners'

const Portfolio = ({
  loading, page,
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
    const cards = page[cat].cards
    if (!cards.length) return <p>Нет данных</p>

    return (
      cards.map(({ title, titleImg, route, _id }, index) => (
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
    loading: state.pages.loading,
    isLogin: state.login.isLogin,
    page: state.pages.portfolio,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: () => dispatch(getPortfolioPage()),
    setCategory: category => dispatch(setCategory(category)),
    setCurrentPage: page => dispatch(setCurrentPage(page)),
    setCurrentPath: path => dispatch(setCurrentPath(path)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)