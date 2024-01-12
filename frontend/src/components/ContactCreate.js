import React, { useState } from 'react';
import ContactService from '../services/ContactService';

const ContactCreate = () => {
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      // Creating the contact
      await ContactService.createContact({
        contact_name: contactName,
        email: email,
        phone: phone,
      });

      // Resetting the form
      setContactName('');
      setEmail('');
      setPhone('');

      // Optionally, you can redirect to the contact list or show a success message to the user
      console.log('Contact created successfully');
    } catch (error) {
      console.error('Error creating contact:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Contact Name:
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactCreate;
