import React, { Component } from 'react'
import classes from './Contact.module.scss'

export default class Contact extends Component {
  render() {
    return (
      <div className={classes.Contact}>
        <a href="mailto:nikadmitrieva.v@gmail.com" type="email">nikadmitrieva.v@gmail.com</a>
      </div>
    )
  }
}