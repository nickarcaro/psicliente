import React, { useState, useEffect } from "react";

import moment from "moment";
import locale from "antd/es/date-picker/locale/es_ES";
import {
  Form,
  Input,
  Button,
  notification,
  Select,
  Row,
  Col,
  DatePicker,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  addPatient,
  getStates,
  getPrevitions,
} from "../../../../api/pacientes";
import { getAccessTokenApi } from "../../../../api/auth";

export default function AddConsultantForm(props) {
  const { setIsVisibleModal, setReloadConsultants } = props;
  const [consultantData, setConsultantData] = useState({});
  const [estados, setEstados] = useState([]);
  const [previsiones, setPrevisiones] = useState([]);

  useEffect(() => {
    getStates(getAccessTokenApi()).then((response) => {
      setEstados(response.rows);
    });
    getPrevitions(getAccessTokenApi()).then((response) => {
      setPrevisiones(response.rows);
    });
  }, []);

  const addConsultant = (e) => {
    e.preventDefault();

    if (
      !consultantData.nombre ||
      !consultantData.apellido ||
      !consultantData.pronombre ||
      !consultantData.nombre_social ||
      !consultantData.RUT ||
      !consultantData.fecha_nacimiento ||
      !consultantData.fecha_ingreso ||
      !consultantData.sexo ||
      !consultantData.Estado_id_Estado ||
      !consultantData.PrevisionSalud_id_PrevisionSalud
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
            message: err.msg,
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
        previsiones={previsiones}
        estados={estados}
      />
    </div>
  );
}

function ConsultantForm(props) {
  const {
    consultantData,
    setConsultantData,
    addConsultant,
    previsiones,
    estados,
  } = props;
  const { Option } = Select;
  const prevision = [];
  const estado = [];

  for (let previsions of previsiones) {
    prevision.push(
      <Option
        key={previsions.id_PrevisionSalud}
        value={previsions.id_PrevisionSalud}
      >
        {previsions.nombre}
      </Option>
    );
  }
  for (let states of estados) {
    estado.push(
      <Option key={states.id_Estado} value={states.id_Estado}>
        {states.nombre}
      </Option>
    );
  }

  return (
    <Form className="form-add" onSubmitCapture={addConsultant}>
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
          <Form.Item>
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
          <Form.Item>
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
          <Form.Item>
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
          <Select
            placeholder="Genero"
            onChange={(e) =>
              setConsultantData({ ...consultantData, genero: e })
            }
            value={consultantData.genero}
          >
            <Option value="Masculino">Masculino</Option>
            <Option value="Femenino">Femenino</Option>
            <Option value="No binario">No Binario</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              placeholder="fecha nacimiento"
              locale={locale}
              format="DD/MM/YYYY "
              value={
                consultantData.fecha_nacimiento &&
                moment(consultantData.fecha_nacimiento)
              }
              onChange={(e, value) =>
                setConsultantData({
                  ...consultantData,
                  fecha_nacimiento: moment(value, "DD/MM/YYYY ").toISOString(),
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              locale={locale}
              placeholder="fecha ingreso"
              format="DD/MM/YYYY "
              value={
                consultantData.fecha_ingreso &&
                moment(consultantData.fecha_ingreso)
              }
              onChange={(e, value) =>
                setConsultantData({
                  ...consultantData,
                  fecha_ingreso: moment(value, "DD/MM/YYYY ").toISOString(),
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Select
            placeholder="Sexo"
            onChange={(e) => setConsultantData({ ...consultantData, sexo: e })}
            value={consultantData.sexo}
          >
            <Option value="0">Masculino</Option>
            <Option value="1">Femenino</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Estado"
              onChange={(e) =>
                setConsultantData({ ...consultantData, Estado_id_Estado: e })
              }
              value={consultantData.Estado_id_Estado}
            >
              {estado}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Form.Item>
          <Select
            placeholder="Prevision de salud"
            onChange={(e) =>
              setConsultantData({
                ...consultantData,
                PrevisionSalud_id_PrevisionSalud: e,
              })
            }
            value={consultantData.PrevisionSalud_id_PrevisionSalud}
          >
            {prevision}
          </Select>
        </Form.Item>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Paciente
        </Button>
      </Form.Item>
    </Form>
  );
}
