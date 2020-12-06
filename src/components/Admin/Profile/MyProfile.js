import React, { useState, useEffect } from "react";
import { Divider, Row, Col } from "antd";

import { Bar, Doughnut, Pie } from "react-chartjs-2";

export default function Profile(props) {
  const { consultants, setReloadConsultants } = props;
  console.log(consultants.length);
  let edades = [];
  let motivos = [];
  let generos = [];
  let instituciones = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    edades.push(dataObj.edad);
    motivos.push(dataObj.motivo);
    generos.push(dataObj.genero);
    instituciones.push(dataObj.tipo_institucion);
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

  let Donut = {
    labels: generos,
    datasets: [
      {
        label: "Porcentaje de trastornos mentales",
        data: [1000000, 3300000],
        backgroundColor: ["green", "red", "rgb(255, 153, 51)", "blue"],
      },
    ],
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Bar
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
            data={data}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Doughnut
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
            data={Donut}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Pie
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
            data={Donut}
          />
        </Col>
      </Row>
    </>
  );
}
