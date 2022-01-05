import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEntries } from '../../context/EntryContext';
//import { useUser } from '../../context/UserContext';
import { useAuth } from '../../hooks/useAuth.js';
//form
export default function Guestbook() {
  //const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');
  const { entries, setEntries } = useEntries();
  //const { user, setUser } = useUser();
  const { logout, user } = useAuth();
  const history = useHistory();
  //useAuth
  //let auth = useAuth
  const name = user;
  function guestName() {
    if (!newEntry) return;
    setEntries([...entries, { name, message: newEntry }]);
    setNewEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    guestName();
  };

  const handleLogout = () => {
    logout(() => history.push('/login'));
  };

  const guestNameInput = (
    <div>
      <div>
        <label>{name}</label>
      </div>
    </div>
  );

  const displayMessage = user
    ? `Thanks for Signing ${user}!`
    : 'Please Sign the Guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : guestNameInput}
        <label>Guest Entry</label>
        <div>
          <textarea
            id="newEntry"
            value={newEntry}
            placeholder="Your Entry!"
            onChange={(e) => setNewEntry(e.target.value)}
          />
        </div>
        <div>
          <button>Sign</button>
        </div>
      </form>
      <button
        type="button"
        onClick={() => {
          handleLogout();
        }}
      >
        Not {user} ?
      </button>
    </>
  );
}
