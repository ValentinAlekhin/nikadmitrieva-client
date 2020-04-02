import React, { Component } from 'react'
import classes from './Gallery.module.scss'
import GalleryItem from '../../components/GalleryItem/GalleryItem'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colls: this.setColls(),
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    window.addEventListener('resize', () => {
      this.setState({ colls: this.setColls() })
      console.log(this.state.colls)
    })
  }

  setColls() {
    const windowWidth = window.innerWidth

    switch (true) {
      case windowWidth <= 600:
        return 1
      case windowWidth <= 1280:
        return 2
      case windowWidth <= 1920:
        return 3
      default:
        return 4
    }
  }

  createColls = () => {
    let colls = []
    for (let coll = 0; coll < this.state.colls; coll++) {
    colls[coll] = <div key={coll}>{ this.createColl(coll) }</div>
    }

    return colls
  }

  createColl = (currenColl) => {
    let coll = []
    for (let i = currenColl; i < this.props.imgArr.length; i+= this.state.colls) {
      coll[i] = <GalleryItem key={i} img={this.props.imgArr[i]}/>
    }

    return coll
  }

  render() {
    console.log(this.state.colls)
    return (
      <div className={classes.Gallery}>
      <h4 className={classes.Title}>
        { this.props.title }
      </h4>
      <div className={classes.Grid}>
        { this.createColls() }
      </div>
    </div>
    )
  }
}