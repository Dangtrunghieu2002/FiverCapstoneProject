import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import CustomerPage from './pages/CustomerPage.jsx';
import LoginPage from './pages/LoginPage.jsx'; // Import your login component

function App() {
  const [user, setUser] = useState(null); // Store logged-in user info

  // Function to handle login, and set user role (either 'admin' or 'customer')
  const handleLogin = (role) => {
    setUser({ role });
  };

  // Protect routes by redirecting to login if no user is logged in
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login">
            <LoginPage onLogin={handleLogin} />
          </Route>
          <PrivateRoute
            path="/admin"
            component={user?.role === 'admin' ? AdminPage : HomePage} // Redirect to HomePage if not admin
          />
          <PrivateRoute
            path="/customer"
            component={user?.role === 'customer' ? CustomerPage : HomePage} // Redirect to HomePage if not customer
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
