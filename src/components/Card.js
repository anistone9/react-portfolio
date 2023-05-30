import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img src="card-image.jpg" alt="Card" />
      <div className="card-body">
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
      </div>
    </div>
  );
};

export default Card;