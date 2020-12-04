import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function GraphLinea(props) {
  const { consultants, setReloadConsultants } = props;
  //console.log(consultants);
  let yAxis = [];
  let xAxis = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    yAxis.push(dataObj.edad);
    xAxis.push(dataObj.motivo);
  }
  let data = {
    labels: xAxis,
    datasets: [
      {
        label: "Porcentaje de trastornos mentales",
        data: yAxis,
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
