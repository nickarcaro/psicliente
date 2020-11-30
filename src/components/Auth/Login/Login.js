import React, { useState, useContext, useEffect } from "react";
import AlertaContext from "../../../hooks/context/alertas/alertaContext";
import AuthContext from "../../../hooks/context/auth/authContext";
import { Alert } from "antd";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.scss";

const Login = (props) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // En caso de que el password o usuario no exista
  useEffect(() => {
    if (autenticado) {
      props.history.push("/home");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  // extraer de usuario
  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className="auth">
      {alerta ? (
        <Alert
          message={`Error: ${alerta.categoria}`}
          description={alerta.msg}
          type="error"
          showIcon
          closable
        />
      ) : null}

      <div className="container-form">
        <h1>Iniciar Sesión</h1>

        <form className="login-form" onSubmit={onSubmit}>
          <Form.Item>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              type="email"
              id="email"
              name="email"
              placeholder="Correo electronico"
              value={email}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={onChange}
            />
          </Form.Item>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
