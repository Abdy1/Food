// components/Modal.tsx
import { useState } from 'react';
import styles from '../styles/Modal.module.css';

export default function Modal({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) {
  const [formData, setFormData] = useState({
    foodName: '',
    foodRating: '',
    foodImage: '',
    restaurantName: '',
    restaurantLogo: '',
    restaurantStatus: 'open'
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);  // Here you can handle the form submission, e.g., send to a backend.
    closeModal();
  };

  return (
    isOpen ? (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-modal" onClick={closeModal}>×</button>
          <h2>Food Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Food Name:
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                placeholder="Enter Food Name"
              />
            </label>
            <label>
              Food Rating:
              <input
                type="text"
                name="foodRating"
                value={formData.foodRating}
                onChange={handleChange}
                placeholder="Enter Food Rating"
              />
            </label>
            <label>
              Food Image (Link):
              <input
                type="url"
                name="foodImage"
                value={formData.foodImage}
                onChange={handleChange}
                placeholder="Enter Food Image URL"
              />
            </label>
            <label>
              Restaurant Name:
              <input
                type="text"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                placeholder="Enter Restaurant Name"
              />
            </label>
            <label>
              Restaurant Logo (Link):
              <input
                type="url"
                name="restaurantLogo"
                value={formData.restaurantLogo}
                onChange={handleChange}
                placeholder="Enter Restaurant Logo URL"
              />
            </label>
            <label>
              Restaurant Status:
              <select
                name="restaurantStatus"
                value={formData.restaurantStatus}
                onChange={handleChange}
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </label>
            <div className="modal-buttons">
              <button type="submit" className="save-btn">Save Food</button>
              <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
}
