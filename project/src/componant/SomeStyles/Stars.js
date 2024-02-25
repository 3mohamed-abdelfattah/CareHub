import React from 'react'
import "./Stars.css"

export default function Stars() {
  return (
<div className="rating">
  <input defaultValue={5} name="rating" id="star5" type="radio" />
  <label htmlFor="star5" />
  <input defaultValue={4} name="rating" id="star4" type="radio" />
  <label htmlFor="star4" />
  <input defaultValue={3} name="rating" id="star3" type="radio" />
  <label htmlFor="star3" />
  <input defaultValue={2} name="rating" id="star2" type="radio" />
  <label htmlFor="star2" />
  <input defaultValue={1} name="rating" id="star1" type="radio" />
  <label htmlFor="star1" />
</div>
  )
}
