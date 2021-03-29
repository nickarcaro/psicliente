import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getConsultants } from "../../../api/consultantes";
import { getAllPatients } from "../../../api/pacientes";
import MyProfile from "../../../components/Admin/Profile";
import "./Profile.less";
export default function Profile() {
  const [consultants, setConsultants] = useState([]);
  const [reloadConsultants, setReloadConsultants] = useState(false);
  const [patients, setPatients] = useState([]);
  const [reloadPatients, setReloadPatients] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getConsultants(token).then((response) => {
      setConsultants(response.rows);
    });
    getAllPatients(token).then((response) => {
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
