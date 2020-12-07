import React, { useState } from "react";
import { Form, Select, Button, Row, Col, notification } from "antd";
import { updateUser } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

export default function EditUserForm(props) {
  const { user, setIsVisibleModal } = props;

  console.log(user);

  const userUpdate = async (values) => {
    const token = getAccessTokenApi();
    let userUpdate = values;

    await updateUser(token, userUpdate, user.id_Usuario).then((result) => {
      notification["success"]({
        message: result.message,
      });
      setIsVisibleModal(false);
    });
  };

  return (
    <div className="edit-user-form">
      <EditForm userUpdate={userUpdate} />
    </div>
  );
}

function EditForm(props) {
  const { userUpdate } = props;
  const { Option } = Select;

  return (
    <Form className="form-edit" onFinish={userUpdate}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select placeholder="Seleccióna una rol">
              <Option value={1}>Administrador</Option>
              <Option value={2}>coordinador</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}
