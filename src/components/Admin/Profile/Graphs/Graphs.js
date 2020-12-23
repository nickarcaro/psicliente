import React from "react";
import { Bar, Doughnut, Pie, Line } from "react-chartjs-2";

export function GraphBar(props) {
  const { consultants, setReloadConsultants } = props;
  //console.log(consultants);
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
    //console.log(dataObj);
    if (dataObj.genero === "Masculino" && dataObj.estado === "consultante") {
      masculinoAct.push(dataObj.genero);
      //console.log(masculinoAct);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "Masculino" && dataObj.estado === "incontestado") {
      masculinoAlagua.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "Masculino" && dataObj.estado === "paciente") {
      masculinopaciente.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "Femenino" && dataObj.estado === "consultante") {
      femeninoAct.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "Femenino" && dataObj.estado === "incontestado") {
      femeninoAlagua.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "Femenino" && dataObj.estado === "paciente") {
      femeninopaciente.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "No binario" && dataObj.estado === "consultante") {
      noBinarioAct.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "No binario" && dataObj.estado === "paciente") {
      noBinariopaciente.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
    if (dataObj.genero === "No binario" && dataObj.estado === "incontestado") {
      noBinarioAlagua.push(dataObj.genero);
      //console.log(dataObj.genero);
      //console.log(dataObj.estado);
    }
  }

  let data1 = {
    labels: [
      "Masculino ",
      "Mujer",
      "No binario "
    ],
    datasets: [
      {
        label: "Cantidad de pacientes",
        data: [
          masculinoAct.length+masculinopaciente.length +masculinoAlagua.length,
          femeninoAct.length+femeninopaciente.length+femeninoAlagua.length,
          noBinarioAct.length +noBinarioAlagua.length +noBinariopaciente.length,
        ],
        backgroundColor: "#22223b",
        borderColor: "#4a4e69",
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
      data={data1}
    />
  );
}

export function GraphConsultantesPorEdadNoContactados(props) {
  const { consultants, setReloadConsultants } = props;
  //console.log(consultants);
  let de3a12 = [];
  let de12a18 = [];
  let de18a25 = [];
  let de25a35 = [];
  let de35a45 = [];
  let de45a60 = [];
  let de60enAdelante = [];
  for (let dataObj of consultants) {
    //console.log(dataObj);
    if (
      dataObj.edad > 3 &&
      dataObj.edad < 12 &&
      dataObj.intentos_contacto === 0
    ) {
      de3a12.push(dataObj.edad);
      //console.log(de3a12);
    }
    if (
      dataObj.edad > 12 &&
      dataObj.edad < 18 &&
      dataObj.intentos_contacto === 0
    ) {
      de12a18.push(dataObj.edad);
      //console.log(de12a18);
    }
    if (
      dataObj.edad > 18 &&
      dataObj.edad < 25 &&
      dataObj.intentos_contacto === 0
    ) {
      de18a25.push(dataObj.edad);
      //console.log(de18a25);
    }
    if (
      dataObj.edad > 25 &&
      dataObj.edad < 35 &&
      dataObj.intentos_contacto === 0
    ) {
      de25a35.push(dataObj.edad);
      //console.log(de25a35);
    }
    if (
      dataObj.edad > 35 &&
      dataObj.edad < 45 &&
      dataObj.intentos_contacto === 0
    ) {
      de35a45.push(dataObj.edad);
      //console.log(de35a45);
    }

    if (
      dataObj.edad > 45 &&
      dataObj.edad < 60 &&
      dataObj.intentos_contacto === 0
    ) {
      de45a60.push(dataObj.edad);
    }
    if (dataObj.edad > 60 && dataObj.intentos_contacto === 0) {
      de60enAdelante.push(dataObj.edad);
    }
  }

  let data4 = {
    labels: ["3-12 ", "12-18", "18-25", "25-35", "35-45", "45-60", "60-"],
    datasets: [
      {
        label: "Numero de pacientes por edad No contactados",
        data: [
          de3a12.length,
          de12a18.length,
          de18a25.length,
          de25a35.length,
          de35a45.length,
          de45a60.length,
          de60enAdelante.length,
        ],
        backgroundColor: "#9d0208",
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
      data={data4}
    />
  );
}

export function GraphPie(props) {
  const { consultants, setReloadConsultants } = props;
  ////console.log(consultants);
  let infantil = [];
  let juvenil = [];
  let adulto = [];
  let adultomayor = [];
  //console.log(infantil);

  for (let dataObj of consultants) {
    if (dataObj.edad > 0 && dataObj.edad < 13) {
      infantil.push(dataObj.edad);
      //console.log(infantil);
    } else if (dataObj.edad < 18 && dataObj.edad > 13) {
      juvenil.push(dataObj.edad);
      //console.log(juvenil);
    } else if (dataObj.edad < 60 && dataObj.edad > 18) {
      adulto.push(dataObj.edad);
      //console.log(adulto);
    } else {
      adultomayor.push(dataObj.edad);
      //console.log(adultomayor);
    }
    //console.log(dataObj);
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
          {gridLines: {
                display:false
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {gridLines: {
                display:false
            },
            ticks: {
              beginAtZero: true,
              display: false,
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
      //console.log(org_Publica);
    } else if (
      dataObj.tipo_institucion === "universidad" ||
      dataObj.tipo_institucion === "instituto técnico"
    ) {
      ed_Sup.push(dataObj.tipo_institucion);
      //console.log(ed_Sup);
    } else if (
      dataObj.tipo_institucion === "colegio" ||
      dataObj.tipo_institucion === "liceo"
    ) {
      ed_Esc.push(dataObj.tipo_institucion);
      //console.log(ed_Esc);
    } else if (dataObj.tipo_institucion === "jardin infantil") {
      ed_PreEsc.push(dataObj.tipo_institucion);
      //console.log(ed_PreEsc);
    } else if (dataObj.tipo_institucion === "organización privada") {
      org_Priv.push(dataObj.tipo_institucion);
      //console.log(org_Priv);
    }
  }
  let data3 = {
    labels: [
      "Organizacion publica",
      "Educación Superior",
      "Organizacion privada",
      "Educacion pre-escolar",
      "Educacion escolar",
    ],
    datasets: [
      {
        label: "Rangos etarios",
        data: [
          org_Publica.length,
          ed_Sup.length,
          ed_Esc.length,
          ed_PreEsc.length,
          org_Priv.length,
        ],
        backgroundColor: [
          "#fb5607",
          "#4a4e69",
          "#f94144",
          "#e500a4",
          "#06d6a0",
        ],
      },
    ],
  };

  return (
    <Doughnut
    options={{
      scales: {
        yAxes: [
          {gridLines: {
                display:false
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {gridLines: {
                display:false
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
      },
    }}
      data={data3}
    />
  );
}

export function GraphLineasEstadoPacientes(props) {
  const { patients, setReloadPatients } = props;
  console.log(patients);
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
  let pacActivo12 = [];
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

  for (let dataObj of patients) {
    let dateIs= dataObj.fecha_ingreso.toString();
    console.log(dateIs.toString() + "1234");
    if ((dataObj.Estado_id_Estado === 1 ||dataObj.Estado_id_Estado === 2) &&dateIs.indexOf("-1-") !== -1) {
      pacActivo1.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-2-") !== -1
    )) {
      pacActivo2.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-3-") !== -1
    )) {
      pacActivo3.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-4-") !== -1
    )) {
      pacActivo4.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-5-") !== -1
    )) {
      pacActivo5.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-6-") !== -1
    )) {
      pacActivo6.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-7-") !== -1
    )) {
      pacActivo7.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-8-") !== -1
    )) {
      pacActivo8.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-9-") !== -1
    )) {
      pacActivo9.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-10-") !== -1
    )) {
      pacActivo10.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-11-") !== -1
    )) {
      pacActivo11.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 1 ||
      (dataObj.Estado_id_Estado === 2 &&
      dateIs.indexOf("-12-") !== -1
    )) {
      pacActivo12.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-1-") !== -1
    ) {
      pacAlAgua1.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-2-") !== -1
    ) {
      pacAlAgua2.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-3-") !== -1
    ) {
      pacAlAgua3.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-4-") !== -1
    ) {
      pacAlAgua4.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-5-") !== -1
    ){
      pacAlAgua5.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-6-") !== -1
    ) {
      pacAlAgua6.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-7-") !== -1
    ) {
      pacAlAgua7.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-8-") !== -1
    ) {
      pacAlAgua8.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-9-") !== -1
    ) {
      pacAlAgua9.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-10-") !== -1
    ) {
      pacAlAgua10.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-11-") !== -1
    ) {
      pacAlAgua11.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    } else if (
      dataObj.Estado_id_Estado === 3 &&
      dateIs.indexOf("-12-") !== -1
    ) {
      pacAlAgua12.push(dataObj.Estado_id_Estado);
      console.log(dataObj.Estado_id_Estado);
      console.log(dateIs);
    }
  }

  let data5 = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Pacientes activo",
        data: [
          pacActivo1.length,
          pacActivo2.length,
          pacActivo3.length,
          pacActivo4.length,
          pacActivo5.length,
          pacActivo6.length,
          pacActivo7.length,
          pacActivo8.length,
          pacActivo9.length,
          pacActivo10.length,
          pacActivo11.length,
          pacActivo12.length,
        ],
        backgroundColor: "#fca311",
      },
      {
        label: "Pacientes al agua",
        data: [
          pacAlAgua1.length,
          pacAlAgua2.length,
          pacAlAgua3.length,
          pacAlAgua4.length,
          pacAlAgua5.length,
          pacAlAgua6.length,
          pacAlAgua7.length,
          pacAlAgua8.length,
          pacAlAgua9.length,
          pacAlAgua10.length,
          pacAlAgua11.length,
          pacAlAgua12.length,
        ],
        backgroundColor: "#14213d",
      },
    ],
  };

  return (
    <Line
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                //stepSize: 0,
                //max: 50,
              },
            },
          ],
        },
      }}
      data={data5}
    />
  );
}
