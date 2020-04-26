import React, { useContext, useEffect } from 'react'
import classes from './Portfolio.module.scss'
import store from '../../store/store'
import GalleryCard from '../../components/GalleryCard/GalleryCard'
import { LoginContext } from '../../context/login/loginContext'
import { PortfolioContext } from '../../context/portfolio/portfolioContext'
import AddGalleryCard from '../../components/AddGalleryCard/AddGalleryCard'

export default props => {
  const category = props.match.params.category
  const cards = store.getPortfolioCardsByCategory(category)

  const { isLogin } = useContext(LoginContext)
  const { getPortfolioPage, state } = useContext(PortfolioContext)

  useEffect(() => {
    (async function() {
      await getPortfolioPage(category)
    })()

    console.log(state)
  }, [])

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