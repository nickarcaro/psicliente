import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "./Contact.scss";

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
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
          <li>Oficina: </li>
          <li>DIrección: </li>
          <li>Teléfono: </li>
        </ul>
      </Col>
    </Row>
  );
}
