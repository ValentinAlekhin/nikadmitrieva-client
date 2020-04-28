import React from 'react'
import classes from './AddImg'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addImg } from '../../redux/gallery/galleryAction'

const AddImg = ({ 
  addImg, category, gallery
}) => {

  // const initialState = {
  //   images: []
  // }

  // const [state, setState] = useState(initialState)

  let images = []

  const onImgInputChange = e => {
    images = e.target.files
  }

  const onButtonClickHandler = async () => {
    console.log('click', images)
    await addImg(category, gallery, images)
  }

  return (
    <div className={classes.ImgItem}>
      <input
        type="file"
        onChange={onImgInputChange}
        accept=".jpg, .jpeg, .png"
        name="img"
        multiple="multiple"
      />
      <button
        onClick={onButtonClickHandler}
      >
        Add
      </button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addImg: (category, gallery, images) => dispatch(addImg(category, gallery, images))
  }
}

export default connect(null, mapDispatchToProps)(AddImg)