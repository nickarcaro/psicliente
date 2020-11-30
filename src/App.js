import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//importación de páginas
import Error404 from "./components/Error404/Error404";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/Signup/SignUp";
//importacion de contextos (hooks)
import AuthState from "./hooks/context/auth/authState";
import AlertaState from "./hooks/context/alertas/alertaState";
import tokenAuth from "./config/token";
import RutaPrivada from "./components/rutas/RutaPrivada";

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <RutaPrivada exact path="/home" component={Dashboard} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
