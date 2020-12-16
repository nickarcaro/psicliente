import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Bar } from "react-chartjs-2";

export default function GraphbarGenero(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let masculinoAct = [];
  let masculinoAlagua = [];
  let masculinopaciente = [];
  let mujerAct = [];
  let mujerAlagua = [];
  let mujerpaciente = [];
  let noBinarioAct = [];
  let noBinarioAlagua = [];
  let noBinariopaciente = [];
  for (var dataObj in consultants) {
    console.log(dataObj);
    if ((dataObj.genero === "Masculino") &&(dataObj.estado === "consultante")) {
      masculinoAct.push(dataObj.genero);
    }
    if ((dataObj.genero === "Masculino") &&(dataObj.estado === "incontestado")) {
      masculinoAlagua.push(dataObj.genero);
    }
    if ((dataObj.genero === "Masculino") &&(dataObj.estado === "paciente")) {
      masculinopaciente.push(dataObj.genero);
    }
    if ((dataObj.genero === "Femenino") &&(dataObj.estado === "consultante")) {
      mujerAct.push(dataObj.genero);
    }
    if ((dataObj.genero === "Femenino") &&(dataObj.estado === "incontestado")) {
      mujerAlagua.push(dataObj.genero);
    }
    if ((dataObj.genero === "Femenino") &&(dataObj.estado === "paciente")) {
      mujerpaciente.push(dataObj.genero);
    }
    if ((dataObj.genero === "No Binario") &&(dataObj.estado === "consultante")) {
      noBinarioAct.push(dataObj.genero);
    }
    if ((dataObj.genero === "No Binario") &&(dataObj.estado === "paciente")) {
      noBinarioAct.push(dataObj.genero);
    }
    if ((dataObj.genero === "No Binario") &&(dataObj.estado === "incontestado")) {
      noBinariopaciente.push(dataObj.genero);
    }
  }

  let data = {
    labels: [ "Masculino activo", "Masculino paciente", "Masculino al agua", "Mujer activa", "Mujer paciente", "Mujer al agua", "No binario activ-", "No binario paciente", "No binario activ-"],
    datasets: [
      {
        label:"Total de consultantes por genero",
        data:[ masculinoAct, masculinoAlagua, mujerAct, mujerAlagua, mujerAlagua, noBinarioAct,noBinarioAlagua, masculinopaciente, mujerpaciente, noBinariopaciente],
        backgroundColor: ["#9d0208", "#1b3a4bs", "#9d0208", "#1b3a4bs","#9d0208", "#1b3a4bs","#9d0208", "#1b3a4bs","#9d0208"]
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
