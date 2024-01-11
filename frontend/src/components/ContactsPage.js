// ContactsPage.js
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ContactCreate from './ContactCreate'
import ContactList from './ContactList'
import ContactUpdate from './ContactUpdate'
import ContactDetail from './ContactDetail'

const ContactsPage = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <nav>
        <ul>
          <li>
            <Link to="/contacts/list">List</Link>
          </li>
          <li>
            <Link to="/contacts/create">Create</Link>
          </li>
          <li>
            <Link to="/contacts/update">Update</Link>
          </li>
          <li>
            <Link to="/contacts/detail">Detail</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/contacts/list" component={ContactList} />
        <Route path="/contacts/create" component={ContactCreate} />
        <Route path="/contacts/update" component={ContactUpdate} />
        <Route path="/contacts/detail" component={ContactDetail} />
      </Switch>
    </div>
  );
};

export default ContactsPage;
