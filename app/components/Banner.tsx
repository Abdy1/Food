import React from 'react';
import styles from '../styles/Banner.module.css'; // Adjust the path based on your folder structure

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles['banner-content']}>
        {/* Main heading */}
        <h1 className={styles['banner-heading']}>Are you starving?</h1>
        
        {/* Subheading */}
        <p className={styles['banner-subheading']}>Within a few clicks, find meals that are accessible near you</p>
      </div>
      
      {/* Image at bottom left */}
      <img src="/Image.png" alt="Food image" className={styles['banner-image']} />
    </div>
  );
};

export default Banner;
