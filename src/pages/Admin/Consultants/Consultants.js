import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import {
  getPatientConsultant,
  getIncontestPatients,
} from "../../../api/pacientes";
import ListConsultants from "../../../components/Admin/Consultants/ListConsultants";

export default function Consultants() {
  const [consultants, setConsultants] = useState([]);
  const [reloadConsultants, setReloadConsultants] = useState(false);
  const [reloadInPatients, setReloadInPatients] = useState(false);
  const [inpatients, setInpatients] = useState([]);
  const token = getAccessTokenApi();

  useEffect(() => {
    getPatientConsultant(token).then((response) => {
      setConsultants(response.rows);
    });
    getIncontestPatients(token).then((response) => {
      setInpatients(response.rows);
    });

    setReloadConsultants(false);
    setReloadInPatients(false);
  }, [token, reloadConsultants, reloadInPatients]);

  return (
    <div>
      <ListConsultants
        consultants={consultants}
        setReloadConsultants={setReloadConsultants}
        inpatients={inpatients}
        setReloadInPatients={setReloadInPatients}
      />
    </div>
  );
}
