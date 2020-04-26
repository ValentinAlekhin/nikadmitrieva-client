import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.scss'
import MenuIMG from './menu.svg'
import Routs from '../../store/Routs'
import Sidenav from '../../components/Sidenav/Sidenav'
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoTitle: 'Ника Дмитриева',
      showDropMenu: false,
      sidenavOpen: false,
      sidenavTitles: Routs.getSidenavNameAndRouts(),
      menuTitles: Routs.getNavNameAndRouts()
    }
  }

  toggleDropMenu = () => {
    this.setState({
      showDropMenu: !this.state.showDropMenu
    })
  }

  dropMenuOn = () => {
    this.setState({
      showDropMenu: true
    })
  }
  dropMenuOff = () => {
    this.setState({
      showDropMenu: false
    })
  }

  toggleMenuHandler = () => {
    this.setState({
      sidenavOpen: !this.state.sidenavOpen
    })
  }

  render() {
    return (
      <header className={classes.Header}>
        <div className={classes.MenuIcon}>
          <img onClick={this.toggleMenuHandler} src={MenuIMG} alt="menu"/>
        </div>
        <h1>
          <NavLink to="/">{this.state.logoTitle}</NavLink>
        </h1>
        <nav className={classes.Nav}>
          <ul className={classes.NavContainer}>
            {this.state.menuTitles.map(({route, title, dropMenu}, index) => (
              dropMenu ? <NavMenuItem 
                link={route} 
                title={title} 
                key={index}
                dropMenuOn={this.dropMenuOn}
                toggleDropMenu={this.toggleDropMenu}
                children={
                  <DropMenu 
                    showDropMenu={this.state.showDropMenu} 
                    dropMenuTitles={dropMenu}
                    dropMenuOff={this.dropMenuOff}
                  />
                }/> :
              <NavMenuItem 
                link={route} 
                title={title} 
                key={index}/>
            ))}
           </ul>
        </nav>
        
        <Sidenav 
          isOpen={this.state.sidenavOpen} 
          titles={this.state.sidenavTitles}
          onClose={this.toggleMenuHandler}
        />

      </header>
    )
  }
}

const NavMenuItem = props => (
  <li 
    className={classes.NavItem}
    onClick={props.toggleDropMenu}
    onMouseEnter={props.dropMenuOn}
  >

    {
      props.link 
        ? <NavLink 
            className={classes.NavLink}
            to={props.link}
          >
            {props.title}
          </NavLink>
          : <React.Fragment>
            <span 
              className={classes.NavLink}
            >
              {props.title}
            </span>
              { props.children }
            </React.Fragment>
    }

  </li>
)

const DropMenu = props => { 
  const cls = [classes.DropContainer]
  if (props.showDropMenu) {
    cls.push(classes.Show)
  } else {
    cls.push(classes.Close)
  }

  return (
    <div className={cls.join(' ')} onMouseLeave={props.dropMenuOff}>
      <ul className={classes.DropMenu} onClick={props.dropMenuOff}>
        { props.dropMenuTitles.map(({route, title}, index) => (
          <li 
            className={classes.DropItem} 
            key={index}
          >
            <NavLink className={classes.DropLink} to={route}>
              { title }
            </NavLink>
          </li>
        )) }
      </ul>
    </div>
  )
}