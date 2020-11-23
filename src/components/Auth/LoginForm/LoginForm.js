/*
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
*/

import React from "react";
import { Form, Button, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import { signInApi } from "../../../api/user";
import { decodeToken } from "../../../api/auth";
import useAuth from "../../../hooks/useAuth";

import "./LoginForm.scss";

export default function LoginForm() {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo electronico no es valido")
        .required("Introduzca su correo electronico"),
      password: Yup.string().required("Introduzca su contraseña"),
    }),
    onSubmit: async (formData) => {
      const result = await signInApi(formData);
      if (result.message) {
      } else if (result === "Failed to fetch") {
      } else {
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        setUser(decodeToken(accessToken));
      }
    },
  });

  return (
    <Form {...layout} className="login-form" onFinish={formik.handleSubmit}>
      <h2>Inicie sesión</h2>

      <Form.Item
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        help={formik.errors.email}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Contraseña"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        help={formik.errors.password}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
}
