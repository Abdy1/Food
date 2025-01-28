
import React from 'react';

const Header = () => {
  return (
    <header className="header">
       <div className="logo">
        {/* Replace the text with an image */}
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="button-container">
        <button className="button">Click Me</button>
      </div>
    </header>
  );
};

export default Header;
