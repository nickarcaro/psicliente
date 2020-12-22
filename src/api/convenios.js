import { basePath } from "./config";

// obtener convenios

export function getConvenios(token) {
  const url = `${basePath}/convenio`;

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

// añadir convenios

export function addConvenio(token, convenio) {
  const url = `${basePath}/convenio/nuevo`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(convenio),
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

// obtener coordinadores

export function getCoordinadores(token) {
  const url = `${basePath}/convenio`;

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

// añadir coordinador

export function addCoordinador(token, coordinador) {
  const url = `${basePath}/coordinador/nuevo`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(coordinador),
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

// obtener tipo instituciones

export function getTipoInstituciones(token) {
  const url = `${basePath}/tipoinstitucion`;

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
