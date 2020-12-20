import React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

export default function Graphbar(props) {
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

  let data1 = {
    labels: [ "Masculino activo", 
              "Masculino paciente", 
              "Masculino al agua", 
              "Mujer activa", 
              "Mujer paciente", 
              "Mujer al agua", 
              "No binario activ-", 
              "No binario paciente", 
              "No binario activ-"],
    datasets: [
      {
        label:"Paciente por genero y estado",
        data:[ masculinoAct.length, 
               masculinopaciente.length, 
               masculinoAlagua.length, 
               femeninoAct.length, 
               femeninopaciente.length, 
               femeninoAlagua.length, 
               femeninoAlagua.length, 
               noBinarioAct.length,
               noBinarioAlagua.length,  
                noBinariopaciente.length],
        backgroundColor: "#f77f00",
        borderColor:"#d62828"
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
   data={data1} />;
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
  let data4 = {
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
      <Bar data={data4} />
    </div>
  );
}

export function GraphPie(props) {
  const { consultants, setReloadConsultants } = props;
console.log(consultants);
let infantil = [];
let juvenil = [];
let adulto = [];
let adultomayor = [];
console.log(infantil)

for (let dataObj of consultants) {
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

let data2 = {
  labels: ["infantil",
           "juvenil",
           "adulto",
           "adulto mayor"],
  datasets: [
    {
      label: "Rangos etarios",
      data: [infantil.length,
             juvenil.length,
             adulto.length,
             adultomayor.length],
      backgroundColor: ["#fb5607",
                        "#4a4e69",
                        "#f94144", 
                        "#e500a4"],
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
  data={data2} />;
}

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
  const { consultants, setReloadConsultants } = props;
  console.log(consultants);
  let org_Publica = [];
  let ed_Sup = [];
  let ed_Esc = [];
  let ed_PreEsc = [];
  let org_Priv = [];
  for (let dataObj of consultants) {
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
  let data3 = {
    labels: ["Organizacion publica",
             "Educación Superior",
             "Organizacion privada",
             "Educacion pre-escolar",
             "Educacion escolar"],
    datasets:[
      {
        label: "Rangos etarios",
        data: [org_Publica.length,
               ed_Sup.length,
               ed_Esc.length,
               ed_PreEsc.length,
               org_Priv.length],
        backgroundColor: ["#fb5607",
                          "#4a4e69",
                          "#f94144",
                          "#e500a4",
                          "#06d6a0"],
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
   data={data3} />;
}
