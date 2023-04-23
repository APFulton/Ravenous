import React from 'react'

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

}

const Business = () => {
  return (
    <div>
        <img src={business.imageSrc} />
        <h2>{business.name}</h2>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{business.state}</p>
        <p>{business.zipcode}</p>
        <h3>{business.category}</h3>
        <h4>{business.rating}</h4>
        <p>{business.review_count}</p>
    </div>
  )
}

export default Business