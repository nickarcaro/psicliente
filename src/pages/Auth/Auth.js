import React from "react";
import "./Auth.scss";
import LoginForm from "../../components/Auth/LoginForm";
export default function Auth() {
  return (
    <div className="auth">
      <div className="container-form">
        <LoginForm />
      </div>
    </div>
  );
}
