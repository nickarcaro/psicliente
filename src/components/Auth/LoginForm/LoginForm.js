import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import "./LoginForm.scss";
export default function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    const result = await signInApi(inputs);

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login correcto.",
      });

      window.location.href = "/home";
    }

    console.log(result);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      onChange={changeForm}
      onSubmit={login}
    >
      <h1> Iniciar Sesión</h1>
      <Form.Item name="email">
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Correo electrónico"
          type="email"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Iniciar Sesión
        </Button>
      </Form.Item>
    </Form>
  );
}
