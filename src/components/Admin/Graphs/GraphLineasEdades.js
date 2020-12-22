import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Line } from "react-chartjs-2";

export default function GraphLineasEdades(props) {
  const { patients, setReloadPatients,  } = props;
  console.log(consultants);
  //Paciente activo por mes
  let pacActivo1 = [];
  let pacActivo2 = [];
  let pacActivo3 = [];
  let pacActivo4 = [];
  let pacActivo5 = [];
  let pacActivo6 = [];
  let pacActivo7 = [];
  let pacActivo8 = [];
  let pacActivo9 = [];
  let pacActivo10 = [];
  let pacActivo11 = [];
  let pacActivo12
  //Paciente al agua por mes
  let pacAlAgua1 = [];
  let pacAlAgua2 = [];
  let pacAlAgua3 = [];
  let pacAlAgua4 = [];
  let pacAlAgua5 = [];
  let pacAlAgua6 = [];
  let pacAlAgua7 = [];
  let pacAlAgua8 = [];
  let pacAlAgua9 = [];
  let pacAlAgua10 = [];
  let pacAlAgua11 = [];
  let pacAlAgua12 = [];
  //sé que este for esta como el reverendo ano de mal optimizado, pero le estoy rezando al pulento para que funcione
  for (var dataObj in patients) {
    if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/1/") != -1){
      pacActivo1.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/2/") != -1){
      pacActivo2.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/3/") != -1){
      pacActivo3.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/4/") != -1){
      pacActivo4.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/5/") != -1){
      pacActivo5.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/6/") != -1){
      pacActivo6.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/7/") != -1){
      pacActivo7.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/8/") != -1){
      pacActivo8.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/9/") != -1){
      pacActivo9.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/10/") != -1){
      pacActivo10.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/11/") != -1){
      pacActivo11.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "consultante" || dataObj.Estado_id_Estado === "paciente" && dataObj.fecha_ingreso.search("/12/") != -1){
      pacActivo12.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/1/") != -1){
      pacAlAgua1.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/2/") != -1){
      pacAlAgua2.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/3/") != -1){
      pacAlAgua3.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/4/") != -1){
      pacAlAgua4.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/5/") != -1){
      pacAlAgua5.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/6/") != -1){
      pacAlAgua6.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/7/") != -1){
      pacAlAgua7.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/8/") != -1){
      pacAlAgua8.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/9/") != -1){
      pacAlAgua9.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/1/") != -1){
      pacAlAgua10.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/1/") != -1){
      pacAlAgua11.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.Estado_id_Estado === "incontestado" && dataObj.fecha_ingreso.search("/1/") != -1){
      pacAlAgua12.push(dataObj.edad);
      console.log(dataObj);
    }
  }

  let data = {
    labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    datasets: [
      {
        label: "Pacientes activo",
        data: [pacActivo1,pacActivo2,pacActivo3,pacActivo4,pacActivo5,pacActivo6,pacActivo7,pacActivo8,pacActivo9,pacActivo10,pacActivo11,pacActivo12],
        backgroundColor: "#fca311",
      },
      {
        label: "Pacientes al agua",
        data: [pacAlAgua1,pacAlAgua2,pacAlAgua3,pacAlAgua4,pacAlAgua5,pacAlAgua6,pacAlAgua7,pacAlAgua8,pacAlAgua9,pacAlAgua10,pacAlAgua11,pacAlAgua12],
        backgroundColor: "#14213d",
      }
    ],
  };

  return <Line
  options={{
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
           stepSize: 5
        }
      }]
    }
  }}
  data={data} />;
}
