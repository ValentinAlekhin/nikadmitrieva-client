import React, { Fragment, useContext } from 'react'
import classes from './Login.module.scss'
import Backdrop from '../Backdrop/Backdrop'
import { LoginContext } from '../../context/login/loginContext'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import { useState } from 'react'

export default props => {

  const initialState = {
    email: '',
    password: '',
  }

  const [ inputs, setInputs ] = useState(initialState)

  const { hide, isOpen, auth, loading } = useContext(LoginContext)

  const onSubmit = e => {
    e.preventDefault()

    auth(inputs.email, inputs.password)
  }

  if(!isOpen) return null

  return (
    <Fragment>
      <div className={classes.Login}>
        <form 
          className={classes.Form}
          onSubmit={() => auth(inputs.email, inputs.password)}
        >
          <Input
            key="email"
            type="email"
            label="Почта"
            placeholder="Введите вашу почту"
            onChange={e => setInputs({ ...inputs, email: e.target.value })}
            value={inputs.email}
            disabled={loading}
          />
          <Input
            key="password"
            type="password"
            label="Пароль"
            placeholder="Введите ваш пароль"
            onChange={e => setInputs({ ...inputs, password: e.target.value })}
            value={inputs.password}
            disabled={loading}
          />
          <Button 
            text="Войти"
            onClick={onSubmit}
            disabled={loading}
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