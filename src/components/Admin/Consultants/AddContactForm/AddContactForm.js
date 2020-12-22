import React, { useState } from "react";
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
import moment from "moment";
import locale from "antd/es/date-picker/locale/es_ES";
import { UserOutlined } from "@ant-design/icons";
import { getAccessTokenApi } from "../../../../api/auth";
import { addContacto } from "../../../../api/pacientes";

export default function AddContactForm(props) {
  const { consultant, setIsVisibleModal, setReloadConsultants } = props;
  const [contactData, setContactData] = useState({});
  contactData.rut = consultant.RUT;

  const addContact = (e) => {
    e.preventDefault();

    if (
      !contactData.encargado ||
      !contactData.fecha ||
      !contactData.respuesta ||
      !contactData.descripcion
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessTokenApi();

      addContacto(accesToken, contactData)
        .then((response) => {
          notification["success"]({
            message: response.message,
          });
          setIsVisibleModal(false);
          setReloadConsultants(true);
          setContactData({});
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
      <ContactForm
        contactData={contactData}
        setContactData={setContactData}
        addContact={addContact}
        consultant={consultant}
      />
    </div>
  );
}

function ContactForm(props) {
  const { contactData, setContactData, addContact, consultant } = props;

  return (
    <Form onSubmitCapture={addContact}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Encargado"
              value={contactData.encargado}
              onChange={(e) =>
                setContactData({ ...contactData, encargado: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              placeholder="fecha"
              locale={locale}
              format="DD/MM/YYYY"
              value={contactData.fecha && moment(contactData.fecha)}
              onChange={(e, value) =>
                setContactData({
                  ...contactData,
                  fecha: moment(value, "DD/MM/YYYY ").toISOString(),
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
              placeholder="Respuesta"
              value={contactData.respuesta}
              onChange={(e) =>
                setContactData({ ...contactData, respuesta: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input.TextArea
              prefix={<UserOutlined />}
              placeholder="Descripcion"
              value={contactData.descripcion}
              onChange={(e) =>
                setContactData({ ...contactData, descripcion: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear contacto
        </Button>
      </Form.Item>
    </Form>
  );
}
