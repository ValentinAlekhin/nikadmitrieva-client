import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DropMenu.module.scss'
import { useState } from 'react'

export default ({ 
  title, subTitles
}) => {

  const [isOpen, setIsOpen] = useState(true)

  const hideDropMenu = () => {
    setIsOpen(false)
  }

  const showDropMenu = () => {
    setIsOpen(true)
  }

  const cls = [classes.DropContainer]
  if (isOpen) {
    cls.push(classes.Show)
  } else {
    cls.push(classes.Close)
  }

  return (
    <div className={classes.DropMenu} onMouseLeave={hideDropMenu}>
      <span className={classes.DropTitle} onClick={showDropMenu} onMouseEnter={showDropMenu}>{ title }</span>
      { isOpen && <ul className={cls.join(' ')}>
          { subTitles.map(({route, title}, index) => (
            <li 
              className={classes.DropItem} 
              key={index}
              onClick={hideDropMenu}
            >
              <NavLink className={classes.DropLink} to={route}>
                { title }
              </NavLink>
            </li>
          )) }
        </ul> }
    </div>
  )
}