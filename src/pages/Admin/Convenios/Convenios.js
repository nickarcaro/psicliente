import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import ListConvenios from "../../../components/Admin/Convenios/ListConvenios";
import {
  getConvenios,
  getCoordinadores,
  getTipoInstituciones,
} from "../../../api/convenios";
export default function Convenios() {
  const [convenios, setConvenios] = useState([]);
  const [reloadConvenios, setReloadConvenios] = useState(false);
  const [coordinador, setCoordinador] = useState([]);
  const [reloadCoordinador, setReloadCoordinador] = useState(false);
  const [instituciones, setInstituciones] = useState([]);
  const [reloadInstituciones, setReloadInstituciones] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getConvenios(token).then((response) => {
      setConvenios(response.rows);
    });
    getCoordinadores(token).then((response) => {
      setCoordinador(response.rows);
    });

    getTipoInstituciones(token).then((response) => {
      setInstituciones(response.rows);
    });

    setReloadConvenios(false);
    setReloadCoordinador(false);
    setReloadInstituciones(false);
  }, [token, reloadConvenios, reloadCoordinador, reloadInstituciones]);
  console.log(coordinador, "desde pagin");

  return (
    <div>
      <ListConvenios
        convenios={convenios}
        coordinador={coordinador}
        instituciones={instituciones}
        setReloadConvenios={setReloadConvenios}
        setReloadCoordinador={setReloadCoordinador}
        setReloadInstituciones={setReloadInstituciones}
      ></ListConvenios>
    </div>
  );
}
