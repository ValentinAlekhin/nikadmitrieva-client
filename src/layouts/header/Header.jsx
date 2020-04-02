import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.scss'
import MenuIMG from './menu.svg'
import Routs from '../../store/Routs'
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoTitle: 'Ника Дмитриева',
      showDropMenu: false,
      sidebarOpen: false,
      menuTitles: Routs.getNavNameAndRouts()
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  
  

  toggleDropMenu = () => {
    this.setState({
      showDropMenu: !this.state.showDropMenu
    })
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <header className={classes.Header}>
        <div className={classes.MenuIcon}>
          <img onClick={this.onSetSidebarOpen.bind(this, true)} src={MenuIMG} alt="menu"/>
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
                toggleDropMenu={this.toggleDropMenu}
                children={
                  <DropMenu showDropMenu={this.state.showDropMenu} dropMenuTitles= {dropMenu}/>
                }/> :
              <NavMenuItem 
                link={route} 
                title={title} 
                key={index}/>
            ))}
           </ul>
        </nav>
      </header>
    )
  }
}

const NavMenuItem = props => (
  <li 
    className={classes.NavItem}
    onClick={props.toggleDropMenu}
  >
    <NavLink 
      className={classes.NavLink}
      to={props.link}
    >
      {props.title}
    </NavLink>
      { props.children }
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
    <div className={cls.join(' ')}>
      <ul className={classes.DropMenu} onClick={props.toggleDropMenu}>
        { props.dropMenuTitles.map(({route, title}, index) => (
          <li className={classes.DropItem} key={index}>
            <NavLink className={classes.DropLink} to={route}>
              { title }
            </NavLink>
          </li>
        )) }
      </ul>
    </div>
  )
}