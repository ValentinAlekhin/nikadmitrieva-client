import React, { useReducer } from 'react'
import { PortfolioReducer } from './portfolioReducer'
import { LOADING_START_P, LOADING_END_P, GET_PORTFOLIO_PAGE } from '../types'
import Axios from 'axios'
import { PortfolioContext } from './portfolioContext'

export const PortfolioState = ({children}) => {

  const initialState = {
    loading: true,
    data: null,
  }

  const [state, dispatch] = useReducer(PortfolioReducer, initialState)

  const loadingStartP = () => dispatch({ type: LOADING_START_P })
  const loadingEndP = () => dispatch({ type: LOADING_END_P })

  const getPortfolioPage = async category => {
    loadingStartP()
    try {
      console.log(state)
      const response = await Axios.post('/api/category/get', {category})
      
      const data = response.data

      console.log(data)

      dispatch({
        type: GET_PORTFOLIO_PAGE,
        payload: data
      })

      console.log(state)
    } catch (err) {
      loadingEndP()
      console.log(err)
    }
  }

  return (
    <PortfolioContext.Provider value={{
      state, loadingEndP, loadingStartP,
      getPortfolioPage
    }} >
      { children }
    </PortfolioContext.Provider>
  )
}