import React from 'react'
import Business from './Business'
import styles from './BusinessLists.module.css'

const BusinessList = () => {
  return (
    <ul className= {styles.card}>
        <li className= {styles.card}><Business /></li>
        <li className= {styles.card}><Business /></li>
        <li className= {styles.card}><Business /></li>
        <li className= {styles.card}><Business /></li>
        <li className= {styles.card}><Business /></li>
        <li className= {styles.card}><Business /></li>
    </ul>
  )
}

export default BusinessList