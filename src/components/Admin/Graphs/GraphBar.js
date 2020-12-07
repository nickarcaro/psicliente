import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function GraphLinea(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let edad = [];
  let motivo = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    edad.push(dataObj.edad);
    motivo.push(dataObj.motivo);
  }
  let data = {
    labels: edad,
    datasets: [
      {
        label: "Porcentaje de trastornos mentales",
        data: motivo,
        backgroundColor: ["green", "red", "rgb(255, 153, 51)", "blue"],
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
