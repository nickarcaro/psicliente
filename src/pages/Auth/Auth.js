import React from "react";
import "./Auth.scss";
import { Tabs } from "antd";
import SignUp from "../../components/Auth/SIgnUp";
import LoginForm from "../../components/Auth/LoginForm";
import { getAccessTokenApi } from "../../api/auth";
import { Redirect } from "react-router-dom";

export default function Auth() {
  const { TabPane } = Tabs;
  if (getAccessTokenApi()) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="auth">
      <div className="container-form">
        <Tabs type="card">
          <TabPane tab={<span>Ingresa</span>} key="1">
            <LoginForm />
          </TabPane>
          <TabPane tab={<span>registrate</span>} key="2">
            <SignUp />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
