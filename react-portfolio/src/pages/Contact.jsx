// Importing React library and useState hook
import React, { useState } from 'react';

function Contact() {
  // Initializing state for form data and errors
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Function to validate email format
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Handler for input blur event to validate fields
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value ? 'This field is required' : '',
      ...(name === 'email' && { email: !validateEmail(value) ? 'Invalid email' : '' }),
    }));
  };

  // Handler for input change event to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    // Returning a section element containing the contact form
    <section>
      {/* Displaying the section title */}
      <h2>Contact</h2>
      {/* Contact form */}
      <form>
        {/* Name input field */}
        <input placeholder="Name" type="text" name="name" onBlur={handleBlur} onChange={handleChange} />
        {/* Displaying error message for name field */}
        {errors.name && <span>{errors.name}</span>}
        {/* Email input field */}
        <input placeholder='Email' type="email" name="email" onBlur={handleBlur} onChange={handleChange} />
        {/* Displaying error message for email field */}
        {errors.email && <span>{errors.email}</span>}
        {/* Message input field */}
        <textarea placeholder='Message' name="message" onBlur={handleBlur} onChange={handleChange}></textarea>
        {/* Displaying error message for message field */}
        {errors.message && <span>{errors.message}</span>}
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

// Exporting the Contact component as the default export
export default Contact;
