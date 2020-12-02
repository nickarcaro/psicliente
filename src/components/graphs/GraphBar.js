import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';
import FetchingGraphData from '../../api/graphData';

export default class GraphBar extends Component{
constructor(props){
  super(props);
  this.state ={
    data:{
      labels:["Psicopatia","Ansiedad","Depresion","Estres"],
      datasets:[{
        label:"Porcentaje de trastornos mentales",
        data:[5000,4500,6500,7500,],
        backgroundColor:["green","red","rgb(255, 153, 51)","blue"]
      }
      ]
    }
  }
}
getChartData = canvas =>{
  const data = this.state.data;
  return data;
}
render(){
  return(
    <div style={{position:"relative"}}>
      <h3> Grafico de Barra</h3>
      <Bar
        options={{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
        data={this.getChartData}
      />
    </div>
  )
}
}
