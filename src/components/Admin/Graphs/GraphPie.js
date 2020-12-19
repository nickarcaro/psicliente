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
 for (let dataObj in consultants){
  if (dataObj.edad > 0 && dataObj.edad < 13) {
    infantil.push(dataObj.edad);
    console.log(infantil)
  }
  else if (dataObj.edad < 18  && dataObj.edad > 13) {
    juvenil.push(dataObj.edad);
    console.log(juvenil)
  }
  else if (dataObj.edad < 60 && dataObj.edad > 18) {
    adulto.push(dataObj.edad);
    console.log(adulto)
  }
  else if (dataObj.estado >60) {
    adultomayor.push(dataObj.edad);
    console.log(adultomayor)
  }
  console.log(dataObj);
}

let data = {
  labels: ["infantil","juvenil","adulto","adulto mayor"],
  datasets: [
    {
      label: "Rangos etarios",
      data: [infantil.length,juvenil.length,adulto.length,adultomayor.length],
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
