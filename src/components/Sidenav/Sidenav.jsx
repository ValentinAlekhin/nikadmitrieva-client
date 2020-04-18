import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Sidenav.module.scss'
import Backdrop from '../Backdrop/Backdrop'

const Sidenav = props => {

  const cls = [classes.Sidenav]
  if (!props.isOpen) {
    cls.push(classes.close)
  }

  return (
    <React.Fragment>
      <div className={cls.join(' ')}>
        <ul>
          { props.titles.map(({route, title}, index) => (
            <li key={index}>
              <NavLink to={route} onClick={props.onClose}>
                { title }
              </NavLink>
            </li>
          )) }
        </ul>
      </div>
      <Backdrop 
        onClick={props.onClose}
        show={props.isOpen}
        timeout={1000}
      />
    </React.Fragment>
  )
}

export default Sidenav