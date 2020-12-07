import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Bar } from "react-chartjs-2";
import { getAccessTokenApi } from "../../../api/auth";
import { getConsultants } from "../../../api/consultantes";
import MyProfile from "../../../components/Admin/Profile";
import Mydashboard from "../Dashboard/Mydashboard";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Profile(props) {
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
      <Mydashboard
      consultants={consultants}
      setReloadConsultants={setReloadConsultants}>
      </Mydashboard>
    </div>
  );
}
