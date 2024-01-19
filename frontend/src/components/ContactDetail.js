import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ContactService from "../services/ContactService";

const ContactDetail = () => {
  const { contactId } = useParams();
  const [contact, setContact] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await ContactService.getContact(contactId);
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, [contactId]);

  const handleUpdate = () => {
    history.push(`/contacts/${contactId}/update`);
  };

  const handleDelete = async () => {
    try {
      await ContactService.deleteContact(contactId);
      console.log('Contact deleted successfully');
      history.push('/contacts');
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Detail</h2>
      {contact ? (
         <div>
         <p>Contact Name: {contact.contact_name}</p>
         <p>Email: {contact.email}</p>
         <p>Phone: {contact.phone}</p>
         <button className="btn btn-primary" onClick={handleUpdate} style={{ marginRight: '10px' }}>Update Contact</button>
         <button className="btn btn-danger" onClick={handleDelete}>Delete Contact</button>
       </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
};

export default ContactDetail;
