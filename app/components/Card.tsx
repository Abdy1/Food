// components/Card.tsx
import React from 'react';

type CardProps = {
  imageUrl: string;
  price: string;
  uploaderImage: string;
  uploaderName: string;
  rating: number;
  isOpen: boolean; 
};

const Card: React.FC<CardProps> = ({ imageUrl, price, uploaderImage, uploaderName, rating, isOpen }) => {
  return (
    <div className="card">
      {/* Product Image */}
      <div className="image-container">
        <img src={imageUrl} alt="Product" className="product-image" />
        {/* Price tag */}
        <div className="price-tag">{price}</div>
      </div>

      {/* Uploader Information */}
      <div className="uploader-info">
        <div className="profile-picture">
          <img src={uploaderImage} alt="Uploader" />
        </div>
        <div className="uploader-name">{uploaderName}</div>
        <div className="rating">
          <img src="/Icon.png" alt="Star" className="star" /> {/* Make sure to replace with the actual star icon */}
          <span className="rating-number">{rating}</span>
        </div>

        {/* Open/Closed Button */}
        <div className={`status-button ${isOpen ? 'open' : 'closed'}`}>
          {isOpen ? 'Open Now' : 'Closed'}
        </div>
      </div>
    </div>
  );
};

export default Card;
