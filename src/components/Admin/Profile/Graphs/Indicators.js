export function TotalPatientsFigures(props) {
  const { patients, setReloadPatients } = props;
  console.log(patients);
  let patientsFigure = [];
  const styles ={
    color: 'red',
    fontSize: '55px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  for (let dataObj of patients) {
    let yearIs= dataObj.fecha_ingreso.toString();
    if (yearIs.indexOf("2020-") !== -1){
        patientsFigure.push(dataObj.fecha_ingreso);
        console.log(yearIs);
    }
  }
  return(<p style={styles}>{patientsFigure.length}</p>);
}

export function RetentionFigures(props) {
  const { patients, setReloadPatients } = props;
  console.log(patients);
  let patientsFigure = [];
  console.log(patientsFigure.length);
  let patientsFigureIncontestant = [];
  console.log(patientsFigureIncontestant.length);

  const styles ={
    color: 'red',
    fontSize: '55px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  for (let dataObj of patients) {
    let yearIs= dataObj.fecha_ingreso.toString();
    if (yearIs.indexOf("2020-") !== -1 && dataObj.Estado_id_Estado === 2){
        patientsFigure.push(dataObj.Estado_id_Estado);
        console.log(dataObj.Estado_id_Estado);
    }else if (yearIs.indexOf("2020-") !== -1 && dataObj.Estado_id_Estado === 3){
        patientsFigureIncontestant.push(dataObj.Estado_id_Estado);
        console.log(dataObj.Estado_id_Estado);
    }
  }
  //let patientsFigureRetention =
  //console.log(patientsFigureRetention);
  let patientsFigureTotal = (patientsFigure.length / (patientsFigure.length + patientsFigureIncontestant.length))*100;
  console.log(patientsFigureTotal);
  return(<p style={styles}>{patientsFigureTotal.toFixed(1)} %</p>);
}

export function ConsultantVariations(props) {
  const { patients, setReloadPatients } = props;
  console.log(patients);
  let thisYearConsultant = [];
  let lastYearConsultant = [];
  const styles ={
    color: 'red',
    fontSize: '55px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  for (let dataObj of patients) {
    let yearIs= dataObj.fecha_ingreso.toString();
    if (yearIs.indexOf("2020-") !== -1 && dataObj.Estado_id_Estado === 1){
        thisYearConsultant.push(dataObj.fecha_ingreso);
        console.log(thisYearConsultant);
    }else if (yearIs.indexOf("2019-") !== -1 && dataObj.Estado_id_Estado === 1){
        lastYearConsultant.push(dataObj.fecha_ingreso);
        console.log(lastYearConsultant);
    }
  }
  let consultantVariationsPerYear = ((thisYearConsultant.length - lastYearConsultant.length)/thisYearConsultant.length)*100;
  return(<p style={styles}>{consultantVariationsPerYear.toFixed(1)}%</p>);
}
