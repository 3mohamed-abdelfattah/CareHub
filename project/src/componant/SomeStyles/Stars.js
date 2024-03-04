import React from 'react';
import "./Stars.css";

export default function Stars() {
  return (
    <div className="rating">
      <input name="rating" id="star5" type="radio" readOnly />
      <label htmlFor="star5" style={{ color: 'gold' }} />
      <input name="rating" id="star4" type="radio" readOnly defaultChecked />
      <label htmlFor="star4" style={{ color: 'gold' }} />
      <input name="rating" id="star3" type="radio" readOnly />
      <label htmlFor="star3" style={{ color: 'gold' }} />
      <input name="rating" id="star2" type="radio" readOnly />
      <label htmlFor="star2" style={{ color: 'gold' }} />
      <input name="rating" id="star1" type="radio" readOnly />
      <label htmlFor="star1" style={{ color: '#ccc' }} />
    </div>
  );
}
