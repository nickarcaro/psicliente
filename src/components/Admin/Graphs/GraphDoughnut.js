import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

export default function GraphDoughnut(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let graphData = [];
  let graphlabel = [];
  for (var dataObj in consultants) {
    console.log(dataObj);
    graphData.push(dataObj.tipo_institucion);
    graphlabel.push(dataObj.tipo_institucion);
  }
  let data = {
    labels: graphlabel,
    data:{
      labels:"Tipos de organizacion",
      datasets:[{
        label:"Pacientes por institucion",
        data:graphData,
        //backgroundColor:["red","rgb(17, 15, 138)","rgb(255, 153, 51)"]
      }
      ]
    }
  };

  return <Doughnut
  options={{
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }}
   data={data} />;
}
