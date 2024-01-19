import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ContactCreate from "./ContactCreate";
import ContactList from "./ContactList";
import ContactUpdate from "./ContactUpdate";
import ContactDetail from "./ContactDetail";

const ContactsPage = () => {
  const style = {
    background: "#f0f0f0",
    borderRadius: "10px", // Adjust the value as needed
    padding: "20px", // Add padding for better visibility
  };
  return (
    <div className="container mt-5" style={style}>
      <h2>Contacts</h2>
      <nav className="nav">
        <Link to="/contacts/list" className="nav-link">List</Link>
        <Link to="/contacts/create" className="nav-link">Create</Link>
      </nav>
      <Switch>
        <Route path="/contacts/list" component={ContactList} />
        <Route path="/contacts/create" component={ContactCreate} />
        <Route path="/contacts/:contactId/update" component={ContactUpdate} />
        <Route path="/contacts/:contactId" component={ContactDetail} />
      </Switch>
    </div>
  );
};

export default ContactsPage;
