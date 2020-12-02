import React from "react";
import GraphLinea from '../../../components/graphs/GraphLinea';
import GraphBar from '../../../components/graphs/GraphBar';
import GraphPie from '../../../components/graphs/GraphPie';
import GraphDoughnut from '../../../components/graphs/GraphDoughnut';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FetchingGraphData from '../../../api/graphData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

  },
}));

export default function Profile() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h2>mi perfil</h2>
      <section id="graphs" classname="Graphs container">
      <h3> Indicadores de la clinica psicologica udp</h3>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphLinea/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphBar/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <GraphPie/>
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
