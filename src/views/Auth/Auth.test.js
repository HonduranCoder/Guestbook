import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ProvideAuth } from '../../context/ProvideAuth.jsx';
import Layout from '../Layout/Layout';
import Auth from './Auth.jsx';
import { UserProvider } from '../../context/UserContext';

it('renders the Auth view', () => {
  const { container } = render(
    <UserProvider>
      <ProvideAuth>
        <MemoryRouter initialEntries={['/login']}>
          <Layout>
            <Switch>
              <Route path="/login">
                <Auth />
              </Route>
            </Switch>
          </Layout>
        </MemoryRouter>
      </ProvideAuth>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
