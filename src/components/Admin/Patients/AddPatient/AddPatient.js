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
  InputNumber,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAccessTokenApi } from "../../../../api/auth";
import { addPatient } from "../../../../api/pacientes";

import "./AddPatient.scss";

export default function AddPatient(props) {
  const { setIsVisibleModal, setReloadPatients } = props;
  const { Option } = Select;
  const formik = useFormik({
    initialValues: {
      nombre: "",
      nombre_social: "",
      apellido: "",
      pronombre: "",
      genero: "",
      rut: "",
      sexo: null,
      fecha_nacimiento: "",
      fecha_ingreso: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Introduzca su nombre"),
      nombre_social: Yup.string().required("Introduzca su nombre social"),
      apellido: Yup.string().required("Introduzca su apellido"),
      pronombre: Yup.string().required("Introduzca su pronombre"),
      rut: Yup.string().required("Introduzca su rut"),
      genero: Yup.string().required("Introduzca su genero"),
      fecha_nacimiento: Yup.date().required("introduzca fecha"),
      fecha_ingreso: Yup.date().required("introduzca fecha"),
      sexo: Yup.number().required("introduzca fecha"),
    }),
    onSubmit: (values) => {
      const accesToken = getAccessTokenApi();
      console.log(values);

      addPatient(accesToken, values)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadPatients(true);
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    },
  });

  return (
    <Form className="form-add" onFinish={formik.handleSubmit}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            help={formik.errors.nombre}
          >
            <Input prefix={<UserOutlined />} placeholder="Nombre" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="nombre_social"
            value={formik.values.nombre_social}
            onChange={formik.handleChange}
            help={formik.errors.nombre_social}
          >
            <Input prefix={<UserOutlined />} placeholder="Nombre social" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="apellido"
            value={formik.values.apellido}
            onChange={formik.handleChange}
            help={formik.errors.apellido}
          >
            <Input prefix={<UserOutlined />} placeholder="Apellido" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="genero"
            value={formik.values.genero}
            onChange={formik.handleChange}
            help={formik.errors.genero}
          >
            <Select placeholder="genero">
              <Option value="masculino">Masculino</Option>
              <Option value="femenino">Femenino</Option>
              <Option value="no binario">No Binario</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="pronombre"
            value={formik.values.pronombre}
            onChange={formik.handleChange}
            help={formik.errors.prononmbre}
          >
            <Input prefix={<UserOutlined />} placeholder="Pronombre" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="fecha_ingreso"
            value={formik.values.fecha_ingreso}
            onChange={formik.handleChange}
            help={formik.errors.fecha_ingreso}
          >
            <DatePicker placeholder="fecha ingreso" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="rut"
            value={formik.values.rut}
            onChange={formik.handleChange}
            help={formik.errors.rut}
          >
            <Input placeholder="rut" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="fecha_nacimiento"
            value={formik.values.fecha_nacimiento}
            onChange={formik.handleChange}
            help={formik.errors.fecha_nacimiento}
          >
            <DatePicker placeholder="fecha nacimiento" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="sexo"
            value={formik.values.sexo}
            onChange={formik.handleChange}
            help={formik.errors.sexo}
          >
            <InputNumber placeholder="sexo" />
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
