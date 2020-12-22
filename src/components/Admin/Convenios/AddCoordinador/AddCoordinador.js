import React, { useState } from "react";
import { Form, Input, Button, notification, Row, Col } from "antd";

import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { getAccessTokenApi } from "../../../../api/auth";
import { addNewCoordinador } from "../../../../api/convenios";

export default function AddCoordinador(props) {
  const { setIsVisibleModal, convenio, setReloadCoordinador } = props;
  const [coordinadorData, setCoordinadorData] = useState({});
  coordinadorData.Convenio_id_Convenio = convenio.id_Convenio;

  const addcoor = (e) => {
    e.preventDefault();
    if (
      !coordinadorData.nombre ||
      !coordinadorData.apellido ||
      !coordinadorData.cargo ||
      !coordinadorData.email ||
      !coordinadorData.telefono
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessTokenApi();

      addNewCoordinador(accesToken, coordinadorData)
        .then((response) => {
          notification["success"]({
            message: response.message,
          });
          setIsVisibleModal(false);
          setReloadCoordinador(true);
          setCoordinadorData({});
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
      <CoordinadorForm
        coordinadorData={coordinadorData}
        setCoordinadorData={setCoordinadorData}
        addcoor={addcoor}
      />
    </div>
  );
}

function CoordinadorForm(props) {
  const { coordinadorData, setCoordinadorData, addcoor } = props;

  return (
    <Form onSubmitCapture={addcoor}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombre"
              value={coordinadorData.nombre}
              onChange={(e) =>
                setCoordinadorData({
                  ...coordinadorData,
                  nombre: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Apellido"
              value={coordinadorData.apellido}
              onChange={(e) =>
                setCoordinadorData({
                  ...coordinadorData,
                  apellido: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Cargo"
              value={coordinadorData.cargo}
              onChange={(e) =>
                setCoordinadorData({
                  ...coordinadorData,
                  cargo: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<MailOutlined />}
              placeholder="Correo"
              value={coordinadorData.email}
              onChange={(e) =>
                setCoordinadorData({
                  ...coordinadorData,
                  email: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Telefono"
              value={coordinadorData.telefono}
              onChange={(e) =>
                setCoordinadorData({
                  ...coordinadorData,
                  telefono: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Coordinador
        </Button>
      </Form.Item>
    </Form>
  );
}
