import React from 'react'
import classes from './ImgControlPanel.module.scss'
import removeIcon from './delete.svg'
import addToIndexPageIcon from './add_to_index_page.svg'

export default ({ 
  show, remove, addToIndexPage
}) => {

  const cls = [classes.ImgControlPanel]

  if (show) cls.push(classes.show)

  return (
    <div className={cls.join(' ')}>
      { addToIndexPage && <div className={classes.IcoContainer}>
        <img 
          className={classes.Ico} 
          src={addToIndexPageIcon} 
          alt="addToIndexPage"
          onDoubleClick={addToIndexPage}
        />
      </div> }
      { remove && <div className={classes.IcoContainer}>
        <img 
          className={classes.Ico} 
          src={removeIcon} 
          alt="remove"
          onDoubleClick={remove}
        />
      </div> }
    </div>
  )
}