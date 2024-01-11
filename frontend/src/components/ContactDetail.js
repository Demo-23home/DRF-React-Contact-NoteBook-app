// ContactDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactService from '../services/ContactService';

const ContactDetail = () => {
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const fetchedContact = await ContactService.getContact(contactId);
        setContact(fetchedContact);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [contactId]);

  return (
    <div>
      <h2>Contact Detail</h2>
      {contact ? (
        <div>
          <p>Contact Name: {contact.contact_name}</p>
          {/* Add other contact details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactDetail;
