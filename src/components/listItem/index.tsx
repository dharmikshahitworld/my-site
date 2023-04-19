import React, { FC } from 'react'
import { ListItemProps } from './types'

const ListItem:FC<ListItemProps> = ({isFruit, title}) => {
  return (
    <div style={{
      margin: '2px',
      padding: '2px',
      backgroundColor: !isFruit ? 'lightblue' : 'lightgreen'
      }}>
      <div>{title}</div>
    </div>
  )
}

export default ListItem 