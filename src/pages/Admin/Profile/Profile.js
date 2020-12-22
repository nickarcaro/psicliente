import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getConsultants } from "../../../api/consultantes";
import { getPatientsForGraph} from "../../../api/pacientes";
import MyProfile from "../../../components/Admin/Profile";

export default function Profile() {
  const [consultants, setConsultants] = useState([]);
  const [reloadConsultants, setReloadConsultants] = useState(false);
  const [patients, setPatients] = useState([]);
  const [reloadPatients, setReloadPatients] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getConsultants(token, true).then((response) => {
      setConsultants(response.rows);
    });
    getPatientsForGraph(token, true).then((response) => {
      setPatients(response.rows);
    });

    setReloadConsultants(false);
    setReloadPatients(false);
  }, [token, reloadConsultants, reloadPatients]);

  return (
    <div>
      <MyProfile
        consultants={consultants}
        setReloadConsultants={setReloadConsultants}
        patients={patients}
        setReloadPatients={setReloadPatients}
      ></MyProfile>
    </div>
  );
}
