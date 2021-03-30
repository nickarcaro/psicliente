import React from "react";
import { Form, Input, Button, Row, Col, List } from "antd";
import "./Contact.less";

export default function Contact() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const data = [
    "Nuevo horarios de atención: Lunes a viernes: de 8:00 a 21:00 hrs.",
    "E-mail: clinica.psicologica@udp.cl",
    "Teléfono: (56 2) 22676 2870",
    "Dirección: Grajales nº 1775, Santiago Centro (Estación Metro Los Héroes).",
  ];

  return (
    <Row gutter={16}>
      <Col
        span={12}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <h2>Contacto: </h2>
        <Form {...layout} name="basic" onFinish={onFinish}>
          <Form.Item
            label="Email"
            rules={[
              {
                required: true,
                message: "Favor ingresa correo electrònico!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contacto"
            rules={[
              {
                required: true,
                message: "Favor ingresa tu consulta!",
              },
            ]}
          >
            <Input.TextArea rows={9} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col
        span={12}
        xs={{ order: 2 }}
        sm={{ order: 1 }}
        md={{ order: 4 }}
        lg={{ order: 3 }}
      >
        <List
          size="large"
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
    </Row>
  );
}

/*

<Row>
      <Col span={18} push={14}>
        <Form
          form={form}
          name="contact"
          onFinish={onFinish}
          scrollToFirstError
          className="login-form"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "La entrada no es válida",
              },
              {
                required: true,
                message: "Favor ingresar correo",
              },
            ]}
          >
            <Input placeholder="Correo Electrónico" />
          </Form.Item>
          <Form.Item
            name="nombre_social"
            rules={[
              {
                required: true,
                message: "Favor ingresar Nombre",
              },
            ]}
          >
            <Input placeholder="nombre social" />
          </Form.Item>
          <Form.Item
            name="asunto"
            rules={[
              {
                required: true,
                message: "Favor ingresar Asunto",
              },
            ]}
          >
            <Input.TextArea placeholder="asunto" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={6} pull={18}>
        <ul>
         
          <li>
           
          </li>
          <li></li>
          <li></li>
          <li>
            
          </li>
        </ul>
      </Col>
    </Row>


    */
