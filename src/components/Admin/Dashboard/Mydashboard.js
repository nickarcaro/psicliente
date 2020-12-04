import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GraphPie from "../Graphs/GraphPie";
import GraphDoughnut from "../Graphs/GraphDoughnut";
import GraphbarGenero from "../Graphs/GraphbarGenero";
import GraphLineasEdades from "../Graphs/GraphLineasEdades";
import { getAccessTokenApi } from "../../../api/auth";
import { getConsultants } from "../../../api/consultantes";
import MyProfile from "../../../components/Admin/Profile";

export default function Mydashboard(props) {
  const classes = useStyles();


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),

    },
  }));
  const [consultants, setConsultants] = useState([]);
  const [reloadConsultants, setReloadConsultants] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getConsultants(token, true).then((response) => {
      setConsultants(response.rows);
    });

    setReloadConsultants(false);
  }, [token, reloadConsultants]);
  return
  (
    <div className={classes.root}>
      <h2>mi perfil</h2>
      <section id="graphs" classname="Graphs container">
      <h3> Indicadores de la clinica psicologica udp</h3>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphbarGenero
            consultants={consultants}
            setReloadConsultants={setReloadConsultants}
        ></GraphbarGenero>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphLineasEdades
            consultants={consultants}
            setReloadConsultants={setReloadConsultants}
            ></GraphLineasEdades>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphPie
            consultants={consultants}
            setReloadConsultants={setReloadConsultants}
            ></GraphPie>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphDoughnut/>
          </Paper>
        </Grid>
      </Grid>
      </section>
    </div>
  );
}
