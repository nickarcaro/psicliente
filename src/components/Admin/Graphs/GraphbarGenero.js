import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Bar } from "react-chartjs-2";

export default function GraphbarGenero(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let masculinoAct = [];
  let masculinoAlagua = [];
  let masculinopaciente = [];
  let femeninoAct = [];
  let femeninoAlagua = [];
  let femeninopaciente = [];
  let noBinarioAct = [];
  let noBinarioAlagua = [];
  let noBinariopaciente = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    if (dataObj.genero === "Masculino" && dataObj.estado === "consultante") {
      masculinoAct.push(dataObj.genero);
      console.log(masculinoAct);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "Masculino" && dataObj.estado === "incontestado") {
      masculinoAlagua.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "Masculino" && dataObj.estado === "paciente") {
      masculinopaciente.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "Femenino" && dataObj.estado === "consultante") {
      femeninoAct.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "Femenino" && dataObj.estado === "incontestado") {
      femeninoAlagua.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "Femenino" && dataObj.estado === "paciente") {
      femeninopaciente.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "No Binario" && dataObj.estado === "consultante") {
      noBinarioAct.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "No Binario" && dataObj.estado === "paciente") {
      noBinarioAct.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
    if (dataObj.genero === "No Binario" && dataObj.estado === "incontestado") {
      noBinariopaciente.push(dataObj.genero);
      console.log(dataObj.genero);
      console.log(dataObj.estado);
    }
  }

  let data = {
    labels: [ "Masculino activo", "Masculino paciente", "Masculino al agua", "Femenino activa", "Femenino paciente", "Femenino al agua", "No binario activ-", "No binario paciente", "No binario activ-"],
    datasets: [
      {
        label:"Paciente por genero y estado",
        data:[ masculinoAct.length, masculinopaciente.length, masculinoAlagua.length, femeninoAct.length, femeninopaciente.length, femeninoAlagua.length, femeninoAlagua.length, noBinarioAct.length,noBinarioAlagua.length,  noBinariopaciente.length],
        backgroundColor: ["#9d0208", "#1b3a4bs", "#6930c3", "#9d0208", "#1b3a4bs", "#6930c3","#9d0208", "#1b3a4bs", "#6930c3"]
      }
    ]
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
