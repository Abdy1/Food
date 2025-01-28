
import React from 'react';


const Banner = () => {
    return (
      <div className="banner">
        <div className="banner-content">
          {/* Main heading */}
          <h1 className="banner-heading">Are you starving?</h1>
          
          {/* Subheading */}
          <p className="banner-subheading">Within a few clicks, find meals that are accessible near you</p>
        </div>
        
        {/* Image at bottom left */}
        <img src="/Image.png" alt="Food image" className="banner-image" />
      </div>
    );
  };

export default Banner;
