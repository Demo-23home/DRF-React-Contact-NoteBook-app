import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactService from "../services/ContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await ContactService.getContacts({ search: searchTerm });
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container mt-5">
      <h2>Contact List</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul className="list-group mt-3">
        {contacts.map((contact) => (
          <li key={contact.id} className="list-group-item">
            <Link to={`/contacts/${contact.id}`}>{contact.contact_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
