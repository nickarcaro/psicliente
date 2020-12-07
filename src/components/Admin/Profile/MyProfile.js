import React from "react";
import { Row, Col } from "antd";
import { GraphBar, GraphDonut, GraphLine, GraphPie } from "./Graphs/Graphs";

import "./MyProfile.scss";

export default function Profile(props) {
  const { consultants } = props;

  return (
    <div className="profile">
      <h2>mi perfil</h2>
      <section id="graphs" classname="Graphs container">
        <h3> Indicadores de la clinica psicologica udp</h3>
        <Row gutter={[16, 40]}>
          <Col span={12}>
            <GraphBar consultants={consultants} />
          </Col>
          <Col span={12}>
            <GraphDonut consultants={consultants} />
          </Col>
        </Row>
        <Row gutter={[16, 40]}>
          <Col span={12}>
            <GraphPie consultants={consultants} />
          </Col>
          <Col span={12}>
            <GraphLine consultants={consultants} />
          </Col>
        </Row>
      </section>
    </div>
  );
}
