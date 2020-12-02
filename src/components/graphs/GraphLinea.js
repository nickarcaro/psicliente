import React, {useState, useEffect} from "react";
import {Line} from 'react-chartjs-2';
import FetchingGraphData from '../../api/graphData';

export default function  GraphLinea(){
  const [dataForChart, setDataForChart] = useState([]);
  const [reloadDataForChart, setReloadDataForChart] = useState(false);
  console.log(dataForChart);

  const chart = () =>{
    const xAxis = [];
    const yAxis = [];

    useEffect(() => {
      FetchingGraphData(token).then((response) => {
        console.log(response.rows);
        setDataForGraph(response.rows);
      });

      setReloadDataForGraph(false);
    }, [reloadDataForChart]);

    setChartData({
      labels: ["lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
      datasets:[{
        label: "Paciente por dia",
        backgroundColor:"rgba(255, 0, 255, 0.75)",
        data:
      }]
    })
  }
  render(){
    return(
      <div style={{position:"relative"}}>
        <h3> Grafico de linea</h3>
        <Line
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
          data={this.getChartData}
        />
      </div>
    )
  }
}
export default GraphLinea;
