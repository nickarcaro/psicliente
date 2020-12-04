import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';
import FetchingGraphData from '../../api/graphData';

export default class GraphPie extends Component{
  constructor(props){
    super(props);
    this.state ={
      data:{
        labels:["Mujer","Hombre","No binario"],
        datasets:[{
          label:"Pacientes por genero",
          data:[1000000,3300000,6500000],
          backgroundColor:["red","rgb(17, 15, 138)","rgb(255, 153, 51)"]
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
        <h3> Grafico de Pie</h3>
        <Pie
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
