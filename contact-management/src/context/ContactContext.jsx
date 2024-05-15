import React, { createContext, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactContext = createContext();

export const useContactContext = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Savvy', email: 'Savvy@yahoo.com', phone: '123-456-7890' },
    { id: 2, name: 'Alex', email: 'Alex@gmail.com', phone: '987-654-3210' },
    { id: 3, name: 'Mary', email: 'Mary@hotmail.com', phone: '111-333-4444' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  const selectContact = (contactId) => {
    const selected = contacts.find(contact => contact.id === contactId);
    setSelectedContact(selected);
  };

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, selectContact }}>
      {children}
    </ContactContext.Provider>
  );
};
