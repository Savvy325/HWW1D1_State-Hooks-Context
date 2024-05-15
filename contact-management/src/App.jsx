import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

const App = () => {
  return (
    <ContactProvider>
      <div>
        <ContactList />
        <ContactDetails />
      </div>
    </ContactProvider>
  );
};

export default App;
