import React, { Fragment } from 'react'
import classes from './Login.module.scss'
import Backdrop from '../Backdrop/Backdrop'

export default (props) => {


  return (
    <Fragment>
      <div>

      </div>

      { props.isOpen ? <Backdrop onClick={props.onClose}/> : null }
    </Fragment>
  )
}