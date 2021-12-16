import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntryProvider } from './context/EntryContext';

ReactDOM.render(
  <React.StrictMode>
    <EntryProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </EntryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
