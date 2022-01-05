import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { ProvideAuth } from './context/ProvideAuth';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';
import Auth from './views/Auth/Auth.jsx';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </ProvideAuth>
  );
}

export default App;
