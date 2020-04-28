import React, { Children, useReducer } from 'react'
import { GalleryGridContext } from './galleryGridContext'
import { GalleryGridReducer } from './galleryGridReducer'

export const GalleryGridState = ({ children }) => {

  const initialState = {
    containerWitdth: null,
    colls: 3,
    collWidth: null,
    gap: 20,
    images: []
  }

  const [state, dispatch] = useReducer(GalleryGridReducer, initialState)

  return (
    <GalleryGridContext.Provider
      value={{

      }}
    >
      { children }
    </GalleryGridContext.Provider>
  )
}