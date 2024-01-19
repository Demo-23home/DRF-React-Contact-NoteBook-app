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
      history.push(`/contacts/${contactId}`);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label">
            Contact Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="contactName"
            name="contact_name"
            value={contact.contact_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Contact</button>
      </form>
    </div>
  );
};

export default ContactUpdate;
