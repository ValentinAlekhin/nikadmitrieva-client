import React, { useContext } from 'react'
import classes from './Portfolio.module.scss'
import store from '../../store/store'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import { LoginContext } from '../../context/login/loginContext'
// import { PortfolioContext } from '../../context/portfolio/portfolioContext'
import AddGalleryCard from '../../components/AddGalleryCard/AddGalleryCard'


export default props => {

  const { isLogin } = useContext(LoginContext)
  // const { state, getPortfolioPage } = useContext(PortfolioContext)


  const category = props.match.params.category
  const cards = store.getPortfolioCardsByCategory(category)

  return (
    <div className={classes.PortfolioContainer}>

      { cards.map(({title, img, link}, index) => (
        <GalleryCard
          key={index}
          title={title}
          img={img}
          link={`${category}${link}`}
        />
      ))}

      { isLogin && <AddGalleryCard category={category}/> }
    </div>
  )
}