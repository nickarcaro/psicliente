import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getConsultants } from "../../../api/consultantes";
import MyProfile from "../../../components/Admin/Profile";

export default function Profile() {
  const [consultants, setConsultants] = useState([]);
  const [reloadConsultants, setReloadConsultants] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getConsultants(token, true).then((response) => {
      setConsultants(response.rows);
    });

    setReloadConsultants(false);
  }, [token, reloadConsultants]);

  return (
    <div>
      <MyProfile
        consultants={consultants}
        setReloadConsultants={setReloadConsultants}
      ></MyProfile>
    </div>
  );
}
