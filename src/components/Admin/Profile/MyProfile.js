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
  const { consultants } = props;

  return (
    <div>
      <Mydashboard
        consultants={consultants}>
      </Mydashboard>
    </div>
  );
}
