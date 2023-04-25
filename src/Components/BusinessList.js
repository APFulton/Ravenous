import React from 'react'
import Business from './Business'
import styles from './BusinessLists.module.css'

const BusinessList = () => {
  return (
    <ul className='card'>
        <li><Business /></li>
        <li><Business /></li>
        <li><Business /></li>
        <li><Business /></li>
        <li><Business /></li>
        <li><Business /></li>
    </ul>
  )
}

export default BusinessList