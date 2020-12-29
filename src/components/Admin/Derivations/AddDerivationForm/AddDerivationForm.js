import React, { useState } from "react";
import { Form, Button, notification, Select, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { addDerivation } from "../../../../api/derivaciones";
import { getAccessTokenApi } from "../../../../api/auth";

export default function AddDerivationForm(props) {
  const {
    setIsVisibleModal,
    setReloadDerivaciones,
    motivos,
    coordinadores,
    rutconsultants,
  } = props;
  const [derivationData, setDerivationData] = useState({});

  const addDerivacion = (e) => {
    e.preventDefault();
    if (
      !derivationData.RUT ||
      !derivationData.id_Coordinador ||
      !derivationData.Motivo_id_Motivo
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessTokenApi();

      addDerivation(accesToken, derivationData)
        .then((response) => {
          notification["success"]({
            message: response.message,
          });
          setIsVisibleModal(false);
          setReloadDerivaciones(true);
          setDerivationData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err.msg,
          });
        });
    }
  };
  return (
    <div className="add-user-form">
      <DerivationForm
        derivationData={derivationData}
        setDerivationData={setDerivationData}
        addDerivacion={addDerivacion}
        motivos={motivos}
        coordinadores={coordinadores}
        rutconsultants={rutconsultants}
      />
    </div>
  );
}

function DerivationForm(props) {
  const {
    derivationData,
    setDerivationData,
    addDerivacion,
    motivos,
    coordinadores,
    rutconsultants,
  } = props;
  const { Option } = Select;
  const motivo = [];
  const coordinador = [];
  const consultant = [];

  for (let motiv of motivos) {
    motivo.push(
      <Option key={motiv.id_Motivo} value={motiv.id_Motivo}>
        {motiv.nombre}
      </Option>
    );
  }
  for (let cord of coordinadores) {
    coordinador.push(
      <Option key={cord.id_Coordinador} value={cord.id_Coordinador}>
        {cord.nombre}
      </Option>
    );
  }

  for (let rut of rutconsultants) {
    consultant.push(
      <Option key={rut.RUT} value={rut.RUT}>
        paciente: {rut.nombre} {rut.apellido}
      </Option>
    );
  }

  return (
    <Form className="form-add" onSubmitCapture={addDerivacion}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder=" Seleccione Consultante"
              onChange={(e) => setDerivationData({ ...derivationData, RUT: e })}
              value={derivationData.RUT}
            >
              {consultant}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder=" Seleccione Coordinador"
              onChange={(e) =>
                setDerivationData({
                  ...derivationData,
                  id_Coordinador: e,
                })
              }
              value={derivationData.id_Coordinador}
            >
              {coordinador}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Seleccione Motivo"
              onChange={(e) =>
                setDerivationData({
                  ...derivationData,
                  Motivo_id_Motivo: e,
                })
              }
              value={derivationData.Motivo_id_Motivo}
            >
              {motivo}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear nueva derivacion
        </Button>
      </Form.Item>
    </Form>
  );
}
