import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

export default function GraphDoughnut(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let org_Publica = [];
  let ed_Sup = [];
  let ed_Esc = [];
  let ed_PreEsc = [];
  let org_Priv = [];
  for (var dataObj in consultants) {
    if (dataObj.tipo_institucion === "organización publica") {
      org_Publica.push(dataObj.tipo_institucion);
      console.log(org_Publica)
    }
    else if (dataObj.tipo_institucion === "universidad" || dataObj.tipo_institucion === "instituto técnico") {
      ed_Sup.push(dataObj.tipo_institucion);
      console.log(ed_Sup)
    }
    else if (dataObj.tipo_institucion === "colegio" || dataObj.tipo_institucion === "liceo") {
      ed_Esc.push(dataObj.tipo_institucion);
      console.log(ed_Esc)
    }
    else if (dataObj.tipo_institucion === "jardin infantil") {
      ed_PreEsc.push(dataObj.tipo_institucion);
      console.log(ed_PreEsc)
    }
    else if (dataObj.tipo_institucion === "organización privada") {
      org_Priv.push(dataObj.tipo_institucion);
      console.log(org_Priv)
    }
  }
  let data = {
    labels: ["Organizacion publica","Universidad","Organizacion privada","Educacion pre-escolar","Educacion escolar","Educacion superior"],
    datasets:[
      {
        label: "Rangos etarios",
        data: [org_Publica.length, ed_Sup.length, ed_Esc.length, ed_PreEsc.length, org_Priv.length],
        backgroundColor: ["#fb5607", "#4a4e69", "#f94144", "#e500a4"],
      },
    ]
  };
  console.log(data)
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
