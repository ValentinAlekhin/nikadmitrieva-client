import React from 'react'
import classes from './AddGalleryCard.module.scss'
import whiteImg from './white.png'
import { useState } from 'react'
import formData from 'form-data'
import { useAxios } from '../../hooks/axiosHook'

export default ({category}) => {

  const { request } = useAxios()

  const initialState = {
    category,
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

  const addCard = async () => {
    setState({
      ...state,
      loading: true
    })

    const cardData = {
      category: state.category,
      title: state.title,
    }

    try {
      const cardResponse = await request('api/category/add-card', 'POST', cardData)

      const { id } = cardResponse.data

      let imgData = new formData()
      imgData.append('img', state.img, id)

      const imgResponse = await request('api/category/add-title-img',
      'POST',
      imgData, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${imgData._boundary}`,
        }
      })

      setState({
        ...state,
        loading: false
      })

    } catch (err) {
      setState({
        ...state,
        loading: false
      })

      console.log(err)
    } 
  }

  return (
    <div className={classes.AddGalleryCard}>
      <div className={classes.ImgContainer}>
        <img className={classes.ImgItem} src={whiteImg} alt="back"/>
        <input 
          type="file"
          onChange={onImgInputChange}
          accept=".jpg, .jpeg, .png"
          name="img"
        />
      </div>
      <div className={classes.TileContainer}>
        <input 
          type="text" 
          value={state.title}
          onChange={onTitleChange}
        />
      </div>
      <button onClick={addCard}>Добавить</button>
    </div>
  )
}