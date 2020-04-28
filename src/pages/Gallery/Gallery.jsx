import React, { Component } from 'react'
import classes from './Gallery.module.scss'
import GalleryItem from '../../components/GalleryItem/GalleryItem'
import { connect } from 'react-redux'
import { getPage } from '../../redux/gallery/galleryAction'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // colls: this.setColls(),
    }
  }

  componentDidMount() {

    // window.scrollTo(0, 0)

    const { category, gallery } = this.props.match.params

    this.props.getPage(category, gallery)

    // window.addEventListener('resize', () => {
    //   this.setState({ colls: this.setColls() })
    // })
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
    for (let i = currenColl; i < this.state.imgArr.length; i+= this.state.colls) {
      coll[i] = <GalleryItem key={i} img={this.state.imgArr[i]}/>
    }

    return coll
  }

  render() {

    if(this.props.loading) return <p>Loading</p>

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

function mapStateToProps(state) {
  return {
    loading: state.gallery.loading,
    gallery: state.gallery.gallery,
    isLogin: state.login.isLogin,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPage: (category, title) => dispatch(getPage(category, title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)