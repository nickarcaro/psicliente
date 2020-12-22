import React from "react";
import { Row, Col } from "antd";
import {
  GraphBar,
  GraphConsultantesPorEdadNoContactados,
  GraphDonut,
  GraphLineasEstadoPacientes,
  GraphPie,
} from "./Graphs/Graphs";

import "./MyProfile.scss";

export default function Profile(props) {
  const { consultants, patients } = props;

  return (
    <div className="profile">
      <h2>mi perfil</h2>
      <section id="graphs" classname="Graphs container">
        <h3> Indicadores de la clinica psicologica udp</h3>
        <Row gutter={[16, 40]}>
          <Col span={12}>
            <h3>Numero de consultantes por genero</h3>
            <GraphBar consultants={consultants} />
          </Col>
          <Col span={12}>
            <h3>Numero de consultantes por rango etario</h3>
            <GraphConsultantesPorEdadNoContactados consultants={consultants} />
          </Col>
        </Row>
        <Row gutter={[16, 40]}>
          <Col span={12}>
            <h3>Número de consultantes no contactados</h3>
            <GraphPie consultants={consultants} />
          </Col>
          <Col span={12}>
            <h3>Consultantes ingresados por tipos de organizacion</h3>
            <GraphDonut consultants={consultants} />
          </Col>
        </Row>
        <Row gutter={[16, 40]}>
          <Col span={24}>
            <h3>Consultantes ingresados por tipos de organizacion</h3>
            <GraphLineasEstadoPacientes patients={patients} />
          </Col>
        </Row>
      </section>
    </div>
  );
}
