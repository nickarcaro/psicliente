import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Line } from "react-chartjs-2";

export default function GraphLineasEdades(props) {
  const { patients, setReloadPatients } = props;
  console.log(patients);
  //pacientes activos
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
  let pacActivo12 = [];
  //pacientes al agua por mes
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
  for (var dataObj in patients) {
    dataStr = dataObj.fecha_ingreso;
    if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("1-2020")=== true){
      pacActivo1.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("2-2020")=== true){
      pacActivo2.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("3-2020")=== true){
      pacActivo3.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("4-2020")=== true){
      pacActivo4.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("5-2020")=== true){
      pacActivo5.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("6-2020")=== true){
      pacActivo6.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("7-2020")=== true){
      pacActivo7.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("8-2020")=== true){
      pacActivo8.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("9-2020")=== true){
      pacActivo9.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("10-2020")=== true){
      pacActivo10.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("11-2020")=== true){
      pacActivo11.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "consultante" || dataObj.estado === "paciente" && fecha_ingreso.includes("12-2020")=== true){
      pacActivo12.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("1-2020")=== true){
      pacalAgua1.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("2-2020")=== true){
      pacalAgua2.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("3-2020")=== true){
      pacalAgua3.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("4-2020")=== true){
      pacalAgua4.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("5-2020")=== true){
      pacalAgua5.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("6-2020")=== true){
      pacalAgua6.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("7-2020")=== true){
      pacalAgua7.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("8-2020")=== true){
      pacalAgua8.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("9-2020")=== true){
      pacalAgua9.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("10-2020")=== true){
      pacalAgua10.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("11-2020")=== true){
      pacalAgua11.push(dataObj.edad);
      console.log(dataObj);
    }else if (dataObj.estado === "incontestado" && fecha_ingreso.includes("12-2020")=== true){
      pacalAgua12.push(dataObj.edad);
      console.log(dataObj);
    }
  }

  let data = {
    labels: ["Enero","Febrero","Marzo","Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets: [
      {
        label: "Pacientes activo",
        data: [pacActivo1.length, pacActivo2.length, pacActivo3.length, pacActivo4.length, pacActivo5.length, pacActivo6.length, pacActivo7.length, pacActivo8.length, pacActivo9.length, pacActivo10.length, pacActivo11.length, pacActivo12.length],
        backgroundColor: "#fca311",
      },
      {
        label: "Pacientes al agua",
        data: [pacAlagua1.length, pacAlagua2.length, pacAlagua3.length, pacAlagua4.length, pacAlagua5.length, pacAlagua6.length, pacAlagua7.length, pacAlagua8.length, pacAlagua9.length, pacAlagua10.length, pacAlagua11.length, pacAlagua12.length],
        backgroundColor: "#14213d",
      }
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
