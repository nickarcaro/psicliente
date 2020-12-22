import React from "react";
import { Bar, Doughnut, Pie, Line } from "react-chartjs-2";

export function GraphBar(props) {
  const { consultants } = props;
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
    labels: [
      "Masculino activo",
      "Masculino paciente",
      "Masculino al agua",
      "Mujer activa",
      "Mujer paciente",
      "Mujer al agua",
      "No binario activ-",
      "No binario paciente",
      "No binario activ-",
    ],
    datasets: [
      {
        label: "Paciente por genero y estado",
        data: [
          masculinoAct.length,
          masculinopaciente.length,
          masculinoAlagua.length,
          femeninoAct.length,
          femeninopaciente.length,
          femeninoAlagua.length,
          femeninoAlagua.length,
          noBinarioAct.length,
          noBinarioAlagua.length,
          noBinariopaciente.length,
        ],
        backgroundColor: "#f77f00",
        borderColor: "#d62828",
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
  const { consultants } = props;
  console.log(consultants);
  let de3a12 = [];
  let de12a18 = [];
  let de18a25 = [];
  let de25a35 = [];
  let de35a45 = [];
  let de45a60 = [];
  let de60enAdelante = [];
  for (let dataObj of consultants) {
    console.log(dataObj);
    if (
      dataObj.edad > 3 &&
      dataObj.edad < 12 &&
      dataObj.intentos_contacto === 0
    ) {
      de3a12.push(dataObj.edad);
      console.log(de3a12);
    }
    if (
      dataObj.edad > 12 &&
      dataObj.edad < 18 &&
      dataObj.intentos_contacto === 0
    ) {
      de12a18.push(dataObj.edad);
      console.log(de12a18);
    }
    if (
      dataObj.edad > 18 &&
      dataObj.edad < 25 &&
      dataObj.intentos_contacto === 0
    ) {
      de18a25.push(dataObj.edad);
      console.log(de18a25);
    }
    if (
      dataObj.edad > 25 &&
      dataObj.edad < 35 &&
      dataObj.intentos_contacto === 0
    ) {
      de25a35.push(dataObj.edad);
      console.log(de25a35);
    }
    if (
      dataObj.edad > 35 &&
      dataObj.edad < 45 &&
      dataObj.intentos_contacto === 0
    ) {
      de35a45.push(dataObj.edad);
      console.log(de35a45);
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
  const { consultants } = props;
  console.log(consultants);
  let infantil = [];
  let juvenil = [];
  let adulto = [];
  let adultomayor = [];
  console.log(infantil);

  for (let dataObj of consultants) {
    if (dataObj.edad > 0 && dataObj.edad < 13) {
      infantil.push(dataObj.edad);
      console.log(infantil);
    } else if (dataObj.edad < 18 && dataObj.edad > 13) {
      juvenil.push(dataObj.edad);
      console.log(juvenil);
    } else if (dataObj.edad < 60 && dataObj.edad > 18) {
      adulto.push(dataObj.edad);
      console.log(adulto);
    } else if (dataObj.estado > 60) {
      adultomayor.push(dataObj.edad);
      console.log(adultomayor);
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
  console.log(consultants);
  let org_Publica = [];
  let ed_Sup = [];
  let ed_Esc = [];
  let ed_PreEsc = [];
  let org_Priv = [];
  for (let dataObj of consultants) {
    if (dataObj.tipo_institucion === "organización publica") {
      org_Publica.push(dataObj.tipo_institucion);
      console.log(org_Publica);
    } else if (
      dataObj.tipo_institucion === "universidad" ||
      dataObj.tipo_institucion === "instituto técnico"
    ) {
      ed_Sup.push(dataObj.tipo_institucion);
      console.log(ed_Sup);
    } else if (
      dataObj.tipo_institucion === "colegio" ||
      dataObj.tipo_institucion === "liceo"
    ) {
      ed_Esc.push(dataObj.tipo_institucion);
      console.log(ed_Esc);
    } else if (dataObj.tipo_institucion === "jardin infantil") {
      ed_PreEsc.push(dataObj.tipo_institucion);
      console.log(ed_PreEsc);
    } else if (dataObj.tipo_institucion === "organización privada") {
      org_Priv.push(dataObj.tipo_institucion);
      console.log(org_Priv);
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
            {
              ticks: {
                beginAtZero: true,
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
  const { patients } = props;
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
  let pacActivo12;
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
    if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 0)
    ) {
      pacActivo1.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 1)
    ) {
      pacActivo2.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 2)
    ) {
      pacActivo3.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 3)
    ) {
      pacActivo4.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 4)
    ) {
      pacActivo5.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 5)
    ) {
      pacActivo6.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 6)
    ) {
      pacActivo7.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 7)
    ) {
      pacActivo8.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 8)
    ) {
      pacActivo9.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 9)
    ) {
      pacActivo10.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 10)
    ) {
      pacActivo11.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "consultante" ||
      (dataObj.Estado_id_Estado === "paciente" &&
        dataObj.fecha_ingreso.getMonth() === 11)
    ) {
      pacActivo12.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 0
    ) {
      pacAlAgua1.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 1
    ) {
      pacAlAgua2.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 2
    ) {
      pacAlAgua3.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 3
    ) {
      pacAlAgua4.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 4
    ) {
      pacAlAgua5.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 5
    ) {
      pacAlAgua6.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 6
    ) {
      pacAlAgua7.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 7
    ) {
      pacAlAgua8.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 8
    ) {
      pacAlAgua9.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 9
    ) {
      pacAlAgua10.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 10
    ) {
      pacAlAgua11.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
    } else if (
      dataObj.Estado_id_Estado === "incontestado" &&
      dataObj.fecha_ingreso.getMonth() === 11
    ) {
      pacAlAgua12.push(dataObj.Estado_id_Estado);
      console.log(dataObj);
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
          pacActivo1,
          pacActivo2,
          pacActivo3,
          pacActivo4,
          pacActivo5,
          pacActivo6,
          pacActivo7,
          pacActivo8,
          pacActivo9,
          pacActivo10,
          pacActivo11,
          pacActivo12,
        ],
        backgroundColor: "#fca311",
      },
      {
        label: "Pacientes al agua",
        data: [
          pacAlAgua1,
          pacAlAgua2,
          pacAlAgua3,
          pacAlAgua4,
          pacAlAgua5,
          pacAlAgua6,
          pacAlAgua7,
          pacAlAgua8,
          pacAlAgua9,
          pacAlAgua10,
          pacAlAgua11,
          pacAlAgua12,
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
                stepSize: 5,
                max: 50,
              },
            },
          ],
        },
      }}
      data={data5}
    />
  );
}
