import React from 'react'
import classes from './Footer.module.scss'
import { connect } from 'react-redux'
import { showLogin } from '../../redux/login/loginAction'

const Footer = ({ showLogin }) => {

  const date = new Date().getFullYear()

  return (
    <footer className={classes.Footer}>
      <span onDoubleClick={showLogin}>
      © { date } Ника Дмитриева
      </span>
    </footer>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    showLogin: () => dispatch(showLogin()),
  }
}

export default connect(null, mapDispatchToProps)(Footer)