import React from 'react'
import classes from './AddGalleryCard.module.scss'
import whiteImg from './white.png'
import { useState } from 'react'
import FormData from 'form-data'

let data = new FormData()

export default ({}) => {

  const initialState = {
    loading: false,
    title: '',
    img: null
  }

  const [ state, setState ] = useState(initialState)

  const onTitleChange = e => {
    setState({
      ...state,
      title: e.target.value
    })
  }

  const onImgInputChange = e => {
    setState({
      ...state, 
      img: e.target.files[0]
    })
  }

  return (
    <div onClick={() => console.log(state.img)} className={classes.AddGalleryCard}>
      <div className={classes.ImgContainer}>
        <img className={classes.ImgItem} src={whiteImg} alt="back"/>
        <input 
          type="file"
          onChange={onImgInputChange}
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <div className={classes.TileContainer}>
        <input 
          type="text" 
          value={state.title}
          onChange={onTitleChange}
        />
      </div>
    </div>
  )
}