import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Line } from "react-chartjs-2";

export default function GraphLineasEdades(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let pacActivo = [];
  let pacAlAgua = [];
  for (var dataObj in consultants) {
    if (dataObj.estado === "consultante" || dataObj.estado === "paciente" ){
      pacActivo.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado"){
      pacAlAgua.push(dataObj.edad);
      console.log(dataObj);
    }
  }

  let data = {
    labels: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
    datasets: [
      {
        label: "Pacientes activo",
        data: pacActivo.length,
        backgroundColor: "#fca311",
      },
      {
        label: "Pacientes al agua",
        data: pacAlAgua.length,
        backgroundColor: "#14213d",
      }
    ],
  };

  return <Line
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
