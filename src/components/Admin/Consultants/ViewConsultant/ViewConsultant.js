import React from "react";
import { Button, Row, Col } from "antd";
export default function ViewConsultant(props) {
  const { consultant, setIsVisibleModal, setReloadConsultants } = props;
  return (
    <>
      <Row gutter={24}>
        <Col span={12}>Rut: {consultant.RUT}</Col>
        <Col span={12}>
          Nombre: {consultant.nombre} <span>{consultant.apellido}</span>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>Nombre social: {consultant.nombre_social}</Col>
        <Col span={12}>Género: {consultant.genero}</Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>Pronombre: {consultant.pronombre}</Col>
      </Row>
    </>
  );
}
