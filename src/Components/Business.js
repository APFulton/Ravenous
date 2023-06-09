import React from 'react'
import styles from "./Business.module.css"

const business = {
    imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipcode: "10101",
    category: "ITALIAN",
    rating: "4.5 stars",
    review_count: "90 reviews"

};

const Business = () => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} />
      </div>
        <h2>{business.name}</h2>
      <div className={styles.info}>
        <p id='col1'>{business.address}</p>
        <p id='col1'>{business.city}</p>
        <p id='col1'>{business.state} {business.zipcode}</p>
        <h3 id='col2'>{business.category}</h3>
        <h4 id='col2'>{business.rating}</h4>
        <p id='col2'>{business.review_count}</p>
        </div>
    </div>
  )
}

export default Business