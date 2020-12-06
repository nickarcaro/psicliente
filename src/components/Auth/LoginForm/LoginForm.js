import React from "react";
import { Form, Input, Button, notification } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/user";
import { TOKEN } from "../../../utils/constants";

import "./LoginForm.scss";
export default function LoginForm() {
  const login = async (values) => {
    console.log(values);

    const result = await signInApi(values);

    if (result.msg) {
      notification["error"]({
        message: result.msg,
      });
    } else {
      const { token } = result;
      localStorage.setItem(TOKEN, token);
      notification["success"]({
        message: result.message,
      });

      window.setTimeout(function () {
        window.location.href = "/home";
      }, 3000);
    }
  };

  return (
    <Form name="normal_login" className="login-form" onFinish={login}>
      <h1> Iniciar Sesión</h1>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Favor ingresar correo electrónico!" },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Correo electrónico"
          type="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Favor ingresar contraseña!" }]}
      >
        <Input.Password
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
