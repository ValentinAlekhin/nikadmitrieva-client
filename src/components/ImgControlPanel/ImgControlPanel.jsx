import React from 'react'
import classes from './ImgControlPanel.module.scss'
import removeIcon from './Remove.svg'

export default ({ 
  show, onDoubleClick
}) => {

  const cls = [classes.ImgControlPanel]

  if (show) cls.push(classes.show)

  return (
    <div className={cls.join(' ')}>
      <div className={classes.IcoContainer}>
        <img 
          className={classes.Ico} 
          src={removeIcon} 
          alt="remove"
          onDoubleClick={onDoubleClick}
        />
      </div>
    </div>
  )
}