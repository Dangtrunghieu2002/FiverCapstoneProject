import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminTemplate from './src/template/adminTemplate/AdminTemplate.jsx';
import UserTemplate from './src/template/userTemplate/UserTemplate.jsx';
import LoginPage from './src/pages/LoginPage/LoginPage.jsx';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (role) => {
    setUser({ role });
  };

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
          <Route exact path="/" component={UserTemplate} />
          <Route path="/login">
            <LoginPage onLogin={handleLogin} />
          </Route>
          <PrivateRoute
            path="/admin"
            render={(props) => user?.role === 'admin' ? <AdminTemplate {...props} /> : <UserTemplate {...props} />}
          />
          <PrivateRoute
            path="/user"
            render={(props) => user?.role === 'user' ? <UserTemplate {...props} /> : <AdminTemplate {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
