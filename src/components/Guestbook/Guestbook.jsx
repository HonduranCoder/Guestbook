import React from 'react';
import { useState } from 'react';
import { useEntries } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
//form
export default function Guestbook() {
  const [name, setName] = useState('');
  const [newEntry, setNewEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  function guestName() {
    if (!newEntry) return;
    setUser(name);
    setEntries([...entries, { name, message: newEntry }]);
    setNewEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    guestName();
  };

  const guestNameInput = (
    <div>
      <div>
        <label>Guest Name</label>
      </div>
      <div className="md:w-2/3">
        <input
          id="guestName"
          type="text"
          placeholder="Guest Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          {user && (
            <button
              type="button"
              onClick={() => {
                setUser('');
                setName('');
              }}
            >
              Not {user} ?
            </button>
          )}
        </div>
      </form>
    </>
  );
}
