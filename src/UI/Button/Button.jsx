import React from 'react'
import classes from './Button.module.scss'

export default ({text, disabled}) => {

  const cls = [classes.Button]

  if (disabled) cls.push(classes.disabled)

  return (
    <button 
      className={cls.join(' ')}
      disabled={disabled}
    >
      { text }
    </button>
  )
}