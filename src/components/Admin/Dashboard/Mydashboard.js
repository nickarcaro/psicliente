import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GraphPie from "../Graphs/GraphPie";
import GraphDoughnut from "../Graphs/GraphDoughnut";
import GraphbarGenero from "../Graphs/GraphbarGenero";
import GraphLineasEdades from "../Graphs/GraphLineasEdades";
import GraphConsultantesPorEdadNoContactados from "../Graphs/GraphConsultantesPorEdadNoContactados";
import { getAccessTokenApi } from "../../../api/auth";
import { getConsultants } from "../../../api/consultantes";
import MyProfile from "../../../components/Admin/Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

  },
}));

export default function Mydashboard(props) {
  const classes = useStyles();
  const { consultants } = props;


  return(
    <div className={classes.root}>
      <h2>mi perfil</h2>
      <section id="graphs">
      <h3> Indicadores de la clinica psicologica udp</h3>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3>Total de consultantes por genero</h3>
            <GraphbarGenero
            consultants={consultants}
        ></GraphbarGenero>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphConsultantesPorEdadNoContactados
            consultants={consultants}
            ></GraphConsultantesPorEdadNoContactados>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h3>Porcentaje de edades</h3>
            <GraphPie
            consultants={consultants}
            ></GraphPie>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3>Tipos de organizacion</h3>
            <GraphDoughnut
            consultants={consultants}
            ></GraphDoughnut>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <GraphLineasEdades
          consultants={consultants}
          ></GraphLineasEdades>
        </Paper>
      </Grid>
      </section>
    </div>
  );
}
