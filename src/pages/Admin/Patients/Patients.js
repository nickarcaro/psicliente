import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getPatients } from "../../../api/pacientes";
import ListPatients from "../../../components/Admin/Patients/ListPatients";
import "./Patients.scss";
export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [reloadPatients, setReloadPatients] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getPatients(token).then((response) => {
      console.log(response);
      setPatients(response);
    });

    setReloadPatients(false);
  }, [token, reloadPatients]);
  return (
    <div className="patients">
      <ListPatients patients={patients} setReloadPatients={setReloadPatients} />
    </div>
  );
}
