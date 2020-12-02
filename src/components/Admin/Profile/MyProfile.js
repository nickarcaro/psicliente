adimport React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Bar } from "react-chartjs-2";

export default function Profile(props) {
  const { consultants, setReloadConsultants } = props;
  //console.log(consultants);
  let edades = [];
  let motivos = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    edades.push(dataObj.edad);
    motivos.push(dataObj.motivo);
  }

  let data = {
    labels: motivos,
    datasets: [
      {
        label: "Porcentaje de trastornos mentales",
        data: edades,
        backgroundColor: ["green", "red", "rgb(255, 153, 51)", "blue"],
      },
    ],
  };

  return <Bar data={data} />;
}
