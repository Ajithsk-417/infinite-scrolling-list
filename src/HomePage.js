import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results=20';

const HomePage = ({ onLogout }) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreContacts = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios.get(API_URL).then((response) => {
        setContacts((prevContacts) => [...prevContacts, ...response.data.results]);
        setIsLoading(false);
      });
    }, 1000);
  };

  useEffect(() => {
    loadMoreContacts();
  }, []);

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.login.uuid}>
            <img src={contact.picture.thumbnail} alt="User" />
            <span>{`${contact.name.first} ${contact.name.last}`}</span>
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <button onClick={loadMoreContacts}>Load More</button>
      )}
    </div>
  );
};

export default HomePage;
