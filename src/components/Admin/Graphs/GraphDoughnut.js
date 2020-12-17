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
    let nameorg = dataObj.tipo_institucion
    if (nameorg.toLowerCase() === "organización publica") {
      org_Publica.push(dataObj.tipo_institucion);
      console.log(org_Publica)
    }
    else if (nameorg.toLowerCase() === "universidad" || nameorg.toLowerCase() === "instituto técnico") {
      ed_Sup.push(dataObj.tipo_institucion);
      console.log(ed_Sup)
    }
    else if (nameorg.toLowerCase() === "colegio" || nameorg.toLowerCase() === "liceo") {
      ed_Esc.push(dataObj.tipo_institucion);
      console.log(ed_Esc)
    }
    else if (nameorg.toLowerCase() === "jardin infantil") {
      ed_PreEsc.push(dataObj.tipo_institucion);
      console.log(ed_PreEsc)
    }
    else if (nameorg.toLowerCase() === "organización privada") {
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
