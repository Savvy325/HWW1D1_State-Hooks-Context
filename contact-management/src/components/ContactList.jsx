import React from 'react';
import { useContactContext } from '../context/ContactContext';

const ContactList = () => {
    const { contacts, selectContact } = useContactContext();
  
    return (
        <div className="container mt-5">
          <h2>Contact List</h2>
          <ul className="list-group">
            {contacts.map(contact => (
              <li key={contact.id} className="list-group-item" onClick={() => selectContact(contact.id)}>
                {contact.name}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ContactList;