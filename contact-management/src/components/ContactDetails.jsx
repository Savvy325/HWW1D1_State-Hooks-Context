import React from 'react';
import { useContactContext } from '../context/ContactContext';

const ContactDetails = () => {
    const { selectedContact } = useContactContext();
  
    return (
        <div className="container mt-5">
          <h2>Contact Details</h2>
          <div className="card">
            <div className="card-body">
              {selectedContact ? (
                <div>
                  <p className="card-text">Name: {selectedContact.name}</p>
                  <p className="card-text">Email: {selectedContact.email}</p>
                  <p className="card-text">Phone: {selectedContact.phone}</p>
                </div>
              ) : (
                <p>No contact selected</p>
              )}
            </div>
          </div>
        </div>
      );
    }

export default ContactDetails;