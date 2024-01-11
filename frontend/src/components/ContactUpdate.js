// ContactUpdate.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactService from '../services/ContactService';

const ContactUpdate = () => {
  const { contactId } = useParams();
  const [contactName, setContactName] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const contact = await ContactService.getContact(contactId);
        setContactName(contact.contact_name);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [contactId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ContactService.updateContact(contactId, { contact_name: contactName });
      console.log('Contact updated successfully');
      // Optionally, you can redirect to the contact list or perform other actions.
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
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </label>
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default ContactUpdate;
