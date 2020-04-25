import React, { useReducer } from 'react'
import { PortfolioContext } from './portfolioContext'
import { PortfolioReducer } from './portfolioReducer'
import { 
  LOADING_START_P, LOADING_END_P, GET_PORTFOLIO_PAGE 
} from '../types'
import Axios from 'axios'


export const PortfolioState = ({children}) => {

  const initialState = {
    loading: false,
    data: null,
  }

  const [state, dispatch] = useReducer(PortfolioReducer, initialState)

  const loadingStartP = () => dispatch({ type: LOADING_START_P })
  const loadingEndP = () => dispatch({ type: LOADING_END_P })

  const getPortfolioPage = async category => {
    loadingStartP()
    try {
      const response = await Axios.post('/api/category/get', category)
      
      const data = response.data

      loadingEndP()

      dispatch({
        type: GET_PORTFOLIO_PAGE,
        payload: data
      })
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