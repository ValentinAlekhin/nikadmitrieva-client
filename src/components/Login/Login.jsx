import React, { Fragment, useContext } from 'react'
import classes from './Login.module.scss'
import Backdrop from '../Backdrop/Backdrop'
import { LoginContext } from '../../context/login/loginContext'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

export default (props) => {

  const { hide, isOpen } = useContext(LoginContext)

  if(!isOpen) return null

  return (
    <Fragment>
      <div className={classes.Login}>
        <form className={classes.Form}>
          <Input
            type="email"
            label="Почта"
            placeholder="Введите вашу почту"
          />
          <Input
            type="password"
            label="Пароль"
            placeholder="Введите ваш пароль"
          />
          <Button 
            text="Войти"
            onClick={e => e.preventDefault()}
          />
        </form>
      </div>

      <Backdrop 
        onClick={hide}
        timeout={1000}
        show={isOpen}
        />
    </Fragment>
  )
}