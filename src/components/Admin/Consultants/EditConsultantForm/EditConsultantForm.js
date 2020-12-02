import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
//import { useDropzone } from "react-dropzone";
import { UserOutlined } from "@ant-design/icons";
//import { getAccessTokenApi } from "../../../../api/auth";

export default function EditConsultantForm(props) {
  const { consultant, setIsVisibleModal, setReloadConsultants } = props;
  const [consultantData, setConsultantData] = useState({});

  useEffect(() => {
    setConsultantData({
      edad: consultant.edad,
      sexo: consultant.sexo,
      genero: consultant.genero,
    });
  }, [consultant]);

  const updateConsultant = (e) => {
    e.preventDefault();
    //const token = getAccessTokenApi();
    let consultantUpdate = consultantData;

    if (
      !consultantUpdate.edad ||
      !consultantUpdate.sexo ||
      !consultantUpdate.genero
    ) {
      notification["error"]({
        message: "edad, sexo y genero son obligatorios.",
      });
      return;
    }

    if (consultantUpdate) {
      console.log(consultantUpdate);

      setIsVisibleModal(false);
      setReloadConsultants(true);
    } else {
      console.log(consultantUpdate);
      setIsVisibleModal(false);
      setReloadConsultants(true);
    }
  };
  return (
    <div className="edit-user-form">
      <EditForm
        consultantData={consultantData}
        setConsultantData={setConsultantData}
        updateConsultant={updateConsultant}
      />
    </div>
  );
}

function EditForm(props) {
  const { consultantData, setConsultantData, updateConsultant } = props;
  const { Option } = Select;

  return (
    <Form className="form-edit" onSubmit={updateConsultant}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="edad"
              value={consultantData.edad}
              onChange={(e) =>
                setConsultantData({ ...consultantData, edad: e })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Genero"
              value={consultantData.genero}
              onChange={(e) =>
                setConsultantData({ ...consultantData, genero: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="sexo"
              onChange={(e) =>
                setConsultantData({ ...consultantData, role: e })
              }
              value={consultantData.sexo}
            >
              <Option value="1">Masculino</Option>
              <Option value="2">Femenino</Option>
              <Option value="3">Otro</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Consultante
        </Button>
      </Form.Item>
    </Form>
  );
}
