import React, { useState } from 'react'
import classes from './Input.module.scss'

export default ({label, placeholder, type, name, disabled, textaria}) => {

  const [value, setValue] = useState('')

  const id = Math.random()

  const cls = [classes.Input]

  if(disabled) cls.push(classes.disabled)

  return (
    <div className={classes.Input}>
      <label htmlFor={id}>{ label }</label>

      { textaria
        ? <textarea 
          type={type || 'text'} 
          id={id}
          name={name || id}
          placeholder={placeholder || ''}
          value={value}
          disabled={disabled}
          onChange={e => setValue(e.target.value)}
          style={{height: 150}}
        />
        : <input 
            type={type || 'text'} 
            id={id}
            name={name || id}
            placeholder={placeholder || ''}
            value={value}
            disabled={disabled}
            onChange={e => setValue(e.target.value)}
          /> }

      
    </div>
  )
}