import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from './context/UserContext.jsx';
import { EntryProvider } from './context/EntryContext.jsx';
import App from './App.jsx';

it('should render App', () => {
  const { container } = render(
    <React.StrictMode>
      <EntryProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </EntryProvider>
    </React.StrictMode>
  );
  expect(container).toMatchSnapshot();
});
