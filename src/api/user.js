import { basePath } from "./config";

// login usuario

export function signInApi(data) {
  const url = `${basePath}/login`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

// registro de usuario

export function signUpApi(data) {
  const url = `${basePath}/signup`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return { message: "Usuario creado correctamente" };
      }
      return { message: result.message };
    })
    .catch((err) => {
      return { message: err.message };
    });
}

// obtener usuarios

export function getUsers(token) {
  const url = `${basePath}/usuario`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

// obtener usuarios

export function updateUser(token, id) {
  const url = `${basePath}/usuario/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

//obtener roles para formulario de registro

export function getUsersRoles() {
  const url = `${basePath}/tipousuario`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function deleteUser(token, id) {
  const url = `${basePath}/usuario/${id}`;

  const params = {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
