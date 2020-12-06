import React, { useState } from "react";
import { Form, Input, Tooltip, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
      <Form.Item
        name="email"
        placeholder="Correo Electrónico"
        rules={[
          {
            type: "email",
            message: "La enntrada no es válida",
          },
          {
            required: true,
            message: "Favor ingresar correo",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        plholerace="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password label="Confirmar Password" />
      </Form.Item>

      <Form.Item
        name="nombre_social"
        label={
          <span>
            <Tooltip title="como quieres que te llamemos?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: "Favor ingresar Nombre",
          },
        ]}
      >
        <Input placeholder="nombre social" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}
