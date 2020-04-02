import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './GalleryCard.module.scss'

export default class GalleryCard extends Component {
  constructor(props) {
    super(props)
    this.myInput = React.createRef()
  }

  state = {
    ImgContainerSize: {
      height: null
    },
  }

  componentDidMount () {
    this.setState({
      ImgContainerSize: {
        height: this.myInput.current.offsetWidth
      },
    })

    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    this.setState({
      ImgContainerSize: {
        height: this.myInput.current.offsetWidth
      },
    })
  }

  

  render() {
    return (
      <div className={classes.GalleryCard}>
      <NavLink ref={this.myInput} className={classes.ImgContainer} to={this.props.link} style={this.state.ImgContainerSize}>
        <img className={classes.ImgItem} src={this.props.img} alt={this.props.title}/>
      </NavLink>
      <NavLink className={classes.GalerryTitle} to={this.props.link}>
        <span>
          { this.props.title }
        </span>
      </NavLink>
    </div>
    )
  }
  
}