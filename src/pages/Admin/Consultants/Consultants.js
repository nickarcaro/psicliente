import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getPatientConsultant } from "../../../api/pacientes";
import ListConsultants from "../../../components/Admin/Consultants/ListConsultants";
export default function Consultants() {
  const [consultants, setConsultants] = useState([]);
  const [reloadConsultants, setReloadConsultants] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getPatientConsultant(token).then((response) => {
      setConsultants(response.rows);
    });

    setReloadConsultants(false);
  }, [token, reloadConsultants]);

  return (
    <div>
      <ListConsultants
        consultants={consultants}
        setReloadConsultants={setReloadConsultants}
      />
    </div>
  );
}
