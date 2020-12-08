import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Pie } from "react-chartjs-2";

export default function GraphPie(props) {
const { consultants, setReloadConsultants } = props;
console.log(consultants);
let infantil = [];
let juvenil = [];
let adulto = [];
let adultomayor = [];

for (var dataObj in consultants) {
  if ((dataObj.edad >0) &&(dataObj.estado <13)) {
    infantil.push(dataObj.edad);
  }
  if ((dataObj.edad <18) &&(dataObj.estado >13)) {
    juvenil.push(dataObj.edad);
  }
  if ((dataObj.edad <60) &&(dataObj.estado >18)) {
    adulto.push(dataObj.edad);
  }
  if (dataObj.estado >60) {
    adultomayor.push(dataObj.edad);
  }
  console.log(dataObj);
}

let data = {
  labels: ["infantil","juvenil","adulto","adulto mayor"],
  datasets: [
    {
      label: "Rangos etarios",
      data: [infantil,juvenil,adulto,adultomayor],
      backgroundColor: ["#fb5607", "#4a4e69", "#f94144", "#e500a4"],
    },
  ],
};

return <Pie
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
