import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Puedes realizar lógica de autenticación aquí y establecer el usuario
    // Aquí simplemente almacenamos el nombre de usuario en el estado
    setUser(username);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
        </Route>
        <Route path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;