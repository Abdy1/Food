
import React from 'react';
import Card from './Card';

const FeaturedProductsSection = () => {
  return (
    <section className="featured-products-section">
      <h2 className="section-title">Featured Products</h2>
      
      {/* Horizontal Stack of Card Components */}
      <div className="product-list">
        <Card
          imageUrl="/item1.png"
          price="$29.99"
          uploaderImage="/restaurant1.png"
          uploaderName="Bow Lasagna"
          rating={4.6}
          isOpen={false}
        />
        <Card
          imageUrl="/item2.png"
          price="$5.99"
          uploaderImage="/restaurant2.png"
          uploaderName="Mixed Avocado Smoothy"
          rating={4.0}
          isOpen={false}
        />
        <Card
          imageUrl="/item3.png"
          price="$19.99"
          uploaderImage="/restaurant3.png"
          uploaderName="Pancake"
          rating={4.8}
          isOpen={true}
        />
        {/* Add more products as needed */}
      </div>
      <div className="load-more-container">
        <div className="load-more-btn">
          Load More &gt;
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
