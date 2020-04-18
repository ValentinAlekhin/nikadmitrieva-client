import React from 'react'
import classes from './Footer.module.scss'
import { useContext } from 'react'
import { LoginContext } from '../../context/login/loginContext'

export default () => {

  const { show } = useContext(LoginContext)

  const date = new Date().getFullYear()

  return (
    <footer className={classes.Footer}>
      <span onDoubleClick={show}>
      © { date } Ника Дмитриева
      </span>
    </footer>
  )
}