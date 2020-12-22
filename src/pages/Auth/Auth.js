import React from "react";
import "./Auth.scss";

import LoginForm from "../../components/Auth/LoginForm";
import { getAccessTokenApi } from "../../api/auth";
import { Redirect } from "react-router-dom";

export default function Auth() {
  if (getAccessTokenApi()) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="auth">
      <div className="container-form">
        <LoginForm />
      </div>
    </div>
  );
}
