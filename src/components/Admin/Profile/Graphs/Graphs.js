import React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

export function GraphBar(props) {
  const { consultants } = props;
  let edades = [];
  let motivos = [];
  let generos = [];
  let instituciones = [];
  let previsiones = [];
  let estados = [];

  for (let dataObj of consultants) {
    console.log(dataObj);
    edades.push(dataObj.edad);
    motivos.push(dataObj.motivo);
    generos.push(dataObj.genero);
    instituciones.push(dataObj.tipo_institucion);
    estados.push(dataObj.estado);
    previsiones.push(dataObj.prevision_salud);
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

  return (
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
  );
}

export function GraphLine(props) {
  const { consultants } = props;

  //console.log(consultants);
  let masculinoAct = [];
  let mujerAct = [];
  let noBinarioAct = [];
  let masculinoAlagua = [];
  let mujerAlagua = [];
  let noBinarioAlagua = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    if (dataObj.genero === "masculino" && dataObj.estado === "activo") {
      masculinoAct.push(dataObj.genero);
    }
    if (dataObj.genero === "masculino" && dataObj.estado === "al agua") {
      masculinoAlagua.push(dataObj.genero);
    }
    if (dataObj.genero === "mujer" && dataObj.estado === "activo") {
      mujerAct.push(dataObj.genero);
    }
    if (dataObj.genero === "mujer" && dataObj.estado === "al agua") {
      mujerAlagua.push(dataObj.genero);
    }
    if (dataObj.genero === "No binario" && dataObj.estado === "activo") {
      noBinarioAct.push(dataObj.genero);
    }

    if (dataObj.genero === "No binario" && dataObj.estado === "al agua") {
      noBinarioAlagua.push(dataObj.genero);
    }
  }
  let data3 = {
    labels: "Total de consultantes por genero",
    datasets: [
      {
        label: [
          "Masculino activo",
          "Masculino al agua",
          "Mujer activa",
          "Mujer al agua",
          "No binario activ-",
          "No binario activ-",
        ],
        data: [
          masculinoAct,
          masculinoAlagua,
          mujerAct,
          mujerAlagua,
          mujerAlagua,
          noBinarioAct,
          noBinarioAlagua,
        ],
        backgroundColor: [
          "#9d0208",
          "#1b3a4bs",
          "#9d0208",
          "#1b3a4bs",
          "#9d0208",
          "#1b3a4bs",
        ],
      },
    ],
  };
  return (
    <div>
      <Bar data={data3} />
    </div>
  );
}

export function GraphPie(props) {
  const { consultants } = props;

  let infantil = [];
  let juvenil = [];
  let adulto = [];
  let adultomayor = [];
  for (let dataObj of consultants) {
    if (dataObj.edad > 0 && dataObj.estado < 13) {
      infantil.push(dataObj.edad);
    }
    if (dataObj.edad < 18 && dataObj.estado > 13) {
      juvenil.push(dataObj.edad);
    }
    if (dataObj.edad < 60 && dataObj.estado > 18) {
      adulto.push(dataObj.edad);
    }
    if (dataObj.estado > 60) {
      adultomayor.push(dataObj.edad);
    }
    console.log(dataObj);
  }

  let data2 = {
    labels: ["infantil", "juvenil", "adulto", "adulto mayor"],
    datasets: [
      {
        label: "Rangos etarios",
        data: [
          infantil.length,
          juvenil.length,
          adulto.length,
          adultomayor.length,
        ],
        backgroundColor: ["#fb5607", "#4a4e69", "#f94144", "#e500a4"],
      },
    ],
  };

  return (
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
      data={data2}
    />
  );
}

export function GraphDonut(props) {
  const { consultants } = props;
  let edades = [];
  let motivos = [];
  let generos = [];
  let instituciones = [];
  let previsiones = [];
  let estados = [];

  for (let dataObj of consultants) {
    console.log(dataObj);
    edades.push(dataObj.edad);
    motivos.push(dataObj.motivo);
    generos.push(dataObj.genero);
    instituciones.push(dataObj.tipo_institucion);
    estados.push(dataObj.estado);
    previsiones.push(dataObj.prevision_salud);
  }

  let Donut = {
    labels: generos,
    datasets: [
      {
        label: "Tipos de organizacion",
        data: [1000000, 3300000],
        backgroundColor: ["green", "red", "rgb(255, 153, 51)", "blue"],
      },
    ],
  };

  return (
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
  );
}
