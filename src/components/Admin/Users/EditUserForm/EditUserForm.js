import React, { useState, useEffect } from "react";
import { Form, Select, Button, Row, Col, notification } from "antd";
import { updateUser } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

export default function EditUserForm(props) {
  const { user, setIsVisibleModal } = props;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData({
      role: user.rol.nombre,
    });
  }, [user]);

  console.log(user);

  const userUpdate = async (e) => {
    const token = getAccessTokenApi();

    await updateUser(token, userData, user.id).then((result) => {
      notification["success"]({
        message: result.msg,
      });
      setIsVisibleModal(false);
    });
  };

  return (
    <div className="edit-user-form">
      <EditForm
        userData={userData}
        setUserData={setUserData}
        userUpdate={userUpdate}
      />
    </div>
  );
}

function EditForm(props) {
  const { userUpdate, userData, setUserData } = props;
  const { Option } = Select;

  return (
    <Form className="form-edit" onFinish={userUpdate}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Seleccióna una rol"
              value={userData.role}
              onChange={(e) => setUserData({ ...userData, role: e })}
            >
              <Option value="Administrador">Administrador</Option>
              <Option value="Coordinador">Coordinador</Option>
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
