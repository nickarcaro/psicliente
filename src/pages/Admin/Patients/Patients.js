import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getPatients, getIncontestPatients } from "../../../api/pacientes";
import ListPatients from "../../../components/Admin/Patients/ListPatients";
import "./Patients.scss";
export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [reloadPatients, setReloadPatients] = useState(false);
  const [reloadInPatients, setReloadInPatients] = useState(false);
  const [inpatients, setInpatients] = useState([]);
  const token = getAccessTokenApi();

  useEffect(() => {
    getPatients(token).then((response) => {
      setPatients(response.rows);
    });
    getIncontestPatients(token).then((response) => {
      setInpatients(response.rows);
    });

    setReloadPatients(false);
    setReloadInPatients(false);
  }, [token, reloadPatients, reloadInPatients]);
  return (
    <div className="patients">
      <ListPatients
        patients={patients}
        inpatients={inpatients}
        setReloadInPatients={setReloadInPatients}
        setReloadPatients={setReloadPatients}
      />
    </div>
  );
}
