import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  notification,
  DatePicker,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getAccessTokenApi } from "../../../../api/auth";
import { addPatient } from "../../../../api/pacientes";

import "./AddPatient.scss";

export default function AddPatient(props) {
  const { setIsVisibleModal, setReloadPatients } = props;
  const [patientData, setPatientData] = useState({});

  const newPatient = async (e) => {
    console.log(patientData);
    if (
      !patientData.nombre ||
      !patientData.apellido ||
      !patientData.nombre_social ||
      !patientData.pronombre ||
      !patientData.genero ||
      !patientData.rut ||
      !patientData.sexo ||
      !patientData.fecha_nacimiento ||
      !patientData.fecha_ingreso ||
      !patientData.estado ||
      !patientData.prevision
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessTokenApi();

      await addPatient(accesToken, patientData)
        .then((response) => {
          notification["success"]({
            message: response.msg,
          });
          setIsVisibleModal(false);
          setReloadPatients(true);
          setPatientData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    }
  };

  return (
    <div>
      <AddForm
        patientData={patientData}
        setPatientData={setPatientData}
        newPatient={newPatient}
      />
    </div>
  );
}

function AddForm(props) {
  const { patientData, setPatientData, newPatient } = props;
  const { Option, OptGroup } = Select;

  return (
    <Form className="form-add" onFinish={newPatient}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombre"
              value={patientData.nombre}
              onChange={(e) =>
                setPatientData({ ...patientData, nombre: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombre_social"
              value={patientData.nombre_social}
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  nombre_social: e.target.value,
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
              placeholder="Apellido"
              value={patientData.apellido}
              onChange={(e) =>
                setPatientData({ ...patientData, apellido: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="genero"
              value={patientData.genero}
              onChange={(e) => setPatientData({ ...patientData, genero: e })}
            >
              <Option value="masculino">Masculino</Option>
              <Option value="femenino">Femenino</Option>
              <Option value="no binario">No Binario</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Pronombre"
              value={patientData.pronombre}
              onChange={(e) =>
                setPatientData({ ...patientData, pronombre: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              placeholder="fecha ingreso"
              value={patientData.fecha_ingreso}
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  fecha_ingreso: e,
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
              placeholder="rut"
              value={patientData.rut}
              onChange={(e) =>
                setPatientData({ ...patientData, rut: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              placeholder="fecha nacimiento"
              value={patientData.fecha_nacimiento}
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  fecha_nacimiento: e,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Prevision"
              value={patientData.prevision}
              onChange={(e) => setPatientData({ ...patientData, prevision: e })}
            >
              <OptGroup label="Pública">
                <Option value="Fonasa">Fonasa</Option>
              </OptGroup>
              <OptGroup label="Isapre">
                <Option value="Banmedica">Banmedica</Option>
                <Option value="Colmena">Colmena</Option>
                <Option value="CruzBlanca">CruzBlanca</Option>
                <Option value="Consalud">Consalud</Option>
                <Option value="Nueva MasVida">Nueva MasVida</Option>
                <Option value="Vida Tres">Vida Tres</Option>
              </OptGroup>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Sexo"
              value={patientData.sexo}
              onChange={(e) => setPatientData({ ...patientData, sexo: e })}
            >
              <Option value="0">Masculino</Option>
              <Option value="1">Femenino</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Estado"
              value={patientData.estado}
              onChange={(e) => setPatientData({ ...patientData, estado: e })}
            >
              <Option value="Activo">Activo</Option>
              <Option value="Al algua">Al agua</Option>
            </Select>
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
