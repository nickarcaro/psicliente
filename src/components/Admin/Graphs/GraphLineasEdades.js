import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Bar } from "react-chartjs-2";

export default function GraphLineasEdades(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let edades = [];
  let motivos = [];
  for (var dataObj in consultants) {
    console.log(dataObj);
    edades.push(dataObj.edad);
    motivos.push(dataObj.motivo);
  }

  let data = {
    labels: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
    datasets: [
      {
        label: "Porcentaje de trastornos mentales",
        data: edades,
        backgroundColor: "rgba(255, 0, 255, 0.75)",
      },
    ],
  };

  return <Bar
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
