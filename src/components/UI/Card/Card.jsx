import React from 'react'
import styles from './Card.module.css'

const Card = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  )
}

export default Card
