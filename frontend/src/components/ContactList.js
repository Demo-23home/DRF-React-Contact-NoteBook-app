import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactService from "../services/ContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await ContactService.getContacts();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.contact_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
