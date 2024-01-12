// ContactUpdate.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ContactService from '../services/ContactService';

const ContactUpdate = () => {
  const { contactId } = useParams();
  const history = useHistory();

  const [contact, setContact] = useState({
    contact_name: '',
    email: '',
    phone: '',
    // Add other fields as needed
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await ContactService.getContact(contactId);
        setContact(data);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [contactId]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ContactService.updateContact(contactId, contact);
      console.log('Contact updated successfully');
      // Optionally, you can redirect to the contact list or perform other actions.
      history.push(`/contacts/${contactId}`);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Contact Name:
          <input
            type="text"
            name="contact_name"
            value={contact.contact_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </label>
        {/* Add other fields as needed */}
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default ContactUpdate;
