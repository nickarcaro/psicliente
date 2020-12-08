import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export default function GraphLinea(props) {
  const { consultants, setReloadConsultants, paciente } = props;
  console.log(consultants);
  let activo = [];
  let alAgua = [];
  let fecha = [];
  for (var dataObj in consultants) {
    console.log(dataObj);
    if (dataObj.estado === "al agua") {
        alAgua.push(dataObj.estado);
    }
    if (dataObj.estado === "activo") {
        activo.push(dataObj.estado);
    }
  }
  for (var dataObj2 in paciente) {
    if (dataObj.estado === "al agua") {
        alAgua.push(dataObj.estado);
    }
  }
  let data = {
    labels: ["hola"],
    datasets: [
      {
        label: "Al agua",
        data: alAgua,
        backgroundColor: ["red"],
      },
      {
        label: "Activo",
        data: activo,
        backgroundColor: ["blue"],
      },
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
