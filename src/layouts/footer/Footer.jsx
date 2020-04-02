import React, { Component } from 'react'
import classes from './Footer.module.scss'

export default class Footer extends Component {
  state = {
    title: 'Ника Дмитриева',
    date: new Date().getFullYear()
  }


  render() {
    return (
      <footer className={classes.Footer}>
        <span>
        © { this.state.date } { this.state.title }
        </span>
      </footer>
    )
  }
}

// const Socials = props => (
//   <ul>
//     { props.socials.map(([icon, link], index) => (
//       <li key={index}>
//         <a href={link}>
//           <img src={icon} alt="Social icon"/>
//         </a>
//       </li>
//     )) }
//   </ul>
// )