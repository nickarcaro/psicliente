import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { Bar } from "react-chartjs-2";

export default function GraphbarGenero(props) {
  const { consultants, setReloadConsultants } = props;
  //console.log(consultants);
  let masculinoAct = [];
  let mujerAct = [];
  let noBinarioAct = [];
  let masculinoAlagua = [];
  let mujerAlagua = [];
  let noBinarioAlagua = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    if ((dataObj.genero == "masculino") &&(dataObj.estado == "activo")) {
      masculinoAct.push(dataObj.genero);
    }
    if ((dataObj.genero == "masculino") &&(dataObj.estado == "al agua")) {
      masculinoAlagua.push(dataObj.genero);
    }
    if ((dataObj.genero == "mujer") &&(dataObj.estado == "activo")) {
      mujerAct.push(dataObj.genero);
    }
    if ((dataObj.genero == "mujer") &&(dataObj.estado == "al agua")) {
      mujerAlagua.push(dataObj.genero);
    }
    if ((dataObj.genero == "No binario") &&(dataObj.estado == "activo")) {
      noBinarioAct.push(dataObj.genero);
    }

    if ((dataObj.genero == "No binario") &&(dataObj.estado == "al agua")) {
      noBinarioAlagua.push(dataObj.genero);
    }
  }

  let data = {
    labels: "Total de consultantes por genero",
    datasets: [
      {
        label: "Masculino activo",
        data: masculinoAct,
        backgroundColor: "9d0208",
      },
      {
        label: "Masculino al agua",
        data: masculinoAlagua,
        backgroundColor: "1b3a4bs",
      },
      {
        label: "Mujer activa",
        data: mujerAct,
        backgroundColor: "9d0208",
      },
      {
        label: "Mujer al agua",
        data: mujerAlagua,
        backgroundColor: "1b3a4bs",
      },
      {
        label: "No binario activ-",
        data: noBinarioAct,
        backgroundColor: "9d0208",
      },
      {
        label: "No binario activ-",
        data: noBinarioAlagua,
        backgroundColor: "1b3a4bs",
      },
    ],
  };

  return <Bar data={data} />;
}
