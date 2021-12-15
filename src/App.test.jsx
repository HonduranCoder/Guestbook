import React from 'react';
import { render } from '@testing-library/react';
import { UserProvider } from './context/UserContext.jsx';
import App from './App.jsx';

it('should render App', () => {
  const { container } = render(
    <UserProvider>
      <App />
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
