import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './details.css'; // Import CSS file for styling

export default function Details() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    dob: '',
    address: '',
    state: '',
    district: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend server
      const response = await axios.post('http://localhost:9000/details', formData);
      console.log('Form data saved:', response.data);
      // Show success message
      window.alert('Details saved successfully!');
    } catch (error) {
      console.error('Failed to save details:', error);
      // Handle failure, e.g., display error message
    }
  };

  return (
    <div className="details-form-container">
      <h2>Details Request Form</h2>
      <form onSubmit={handleSubmit} className="details-form">
        {/* Input fields */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />

        <label htmlFor="district">District:</label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          required
        />

        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
