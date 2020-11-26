import React, { useState, useContext, useEffect } from "react";
import AlertaContext from "../../../hooks/context/alertas/alertaContext";
import AuthContext from "../../../hooks/context/auth/authContext";

const SignUp = (props) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
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
    nombre: "",
    nombre_social: "",
    email: "",
    password: "",
    confirmar: "",
    TipoUsuario_id_TipoUsuario: 1,
  });

  // extraer de usuario
  const { nombre, email, password, confirmar, nombre_social } = usuario;

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
    if (
      nombre.trim() === "" ||
      nombre_social.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    // Password minimo de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "El password debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }

    // Los 2 passwords son iguales
    if (password !== confirmar) {
      mostrarAlerta("Los passwords no son iguales", "alerta-error");
      return;
    }

    // Pasarlo al action
    registrarUsuario({
      nombre,
      email,
      password,
      nombre_social,
      TipoUsuario_id_TipoUsuario: 1,
    });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="nombre_social">Nombre Social</label>
            <input
              type="text"
              id="nombre_social"
              name="nombre_social"
              placeholder="Tu Nombre"
              value={nombre_social}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
