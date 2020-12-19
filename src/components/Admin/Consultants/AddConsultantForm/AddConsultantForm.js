import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  notification,
  Select,
  Tooltip,
  Row,
  Col,
  DatePicker,
  InputNumber,
} from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { addPatient } from "../../../../api/pacientes";
import { getAccessTokenApi } from "../../../../api/auth";

export default function AddConsultantForm(props) {
  const { setIsVisibleModal, setReloadConsultants } = props;
  const [consultantData, setConsultantData] = useState({});

  const addConsultant = (event) => {
    event.preventDefault();

    if (
      !consultantData.name ||
      !consultantData.lastname ||
      !consultantData.role ||
      !consultantData.email ||
      !consultantData.password ||
      !consultantData.repeatPassword
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessTokenApi();

      addPatient(accesToken, consultantData)
        .then((response) => {
          notification["success"]({
            message: response.message,
          });
          setIsVisibleModal(false);
          setReloadConsultants(true);
          setConsultantData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    }
  };
  return (
    <div className="add-user-form">
      <ConsultantForm
        consultantData={consultantData}
        setConsultantData={setConsultantData}
        addConsultant={addConsultant}
      />
    </div>
  );
}

function ConsultantForm(props) {
  const { consultantData, setConsultantData, addConsultant } = props;
  const { Option } = Select;
  return (
    <Form className="form-add" onSubmit={addConsultant}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombre"
              value={consultantData.nombre}
              onChange={(e) =>
                setConsultantData({ ...consultantData, nombre: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="apellido">
            <Input
              prefix={<UserOutlined />}
              placeholder="Apellido"
              value={consultantData.apellido}
              onChange={(e) =>
                setConsultantData({
                  ...consultantData,
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
              placeholder="Nombre social"
              value={consultantData.nombre_social}
              onChange={(e) =>
                setConsultantData({
                  ...consultantData,
                  nombre_social: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="pronombre">
            <Input
              prefix={<UserOutlined />}
              placeholder="Pronombre"
              value={consultantData.pronombre}
              onChange={(e) =>
                setConsultantData({
                  ...consultantData,
                  pronombre: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="rut">
            <Input
              placeholder="rut"
              value={consultantData.RUT}
              onChange={(e) =>
                setConsultantData({ ...consultantData, RUT: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="genero">
            <Select placeholder="genero">
              <Option value="masculino">Masculino</Option>
              <Option value="femenino">Femenino</Option>
              <Option value="no binario">No Binario</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={14}>
          <Form.Item name="fecha_ingreso">
            <DatePicker placeholder="fecha ingreso" />
          </Form.Item>
        </Col>
        <Col span={14}>
          <Form.Item name="fecha_nacimiento">
            <DatePicker placeholder="fecha nacimiento" />
          </Form.Item>
        </Col>
        <Col span={14}>
          <Form.Item name="sexo">
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Paciente
        </Button>
      </Form.Item>
    </Form>
  );
}
