'use client'; // This tells Next.js to treat this file as a Client Component

import React, { useState } from 'react';
import Modal from './Modal';  // Import the Modal component

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        {/* Replace the text with an image */}
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="button-container">
        {/* Button to open the modal */}
        <button className="button" onClick={openModal}>Add Food</button>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </header>
  );
}

export default Header;
