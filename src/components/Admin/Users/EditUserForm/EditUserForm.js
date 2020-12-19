import React, { useState, useEffect } from "react";
import { Form, Select, Button, Row, Col, notification, Input } from "antd";
import { updateUser, getUsersRoles } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

export default function EditUserForm(props) {
  const { user, setIsVisibleModal, setReloadUsers } = props;
  const [userData, setUserData] = useState({});
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getUsersRoles().then((response) => {
      setRoles(response.rows);
    });
  }, []);

  console.log(user);

  const userUpdate = async (values) => {
    const token = getAccessTokenApi();
    const { TipoUsuario_id_TipoUsuario, id_Usuario } = values;

    await updateUser(token, TipoUsuario_id_TipoUsuario, id_Usuario)
      .then((result) => {
        notification["success"]({
          message: result.message,
        });
        setIsVisibleModal(false);
        setReloadUsers(true);
      })
      .catch((err) => {
        notification["error"]({
          message: err.msg,
        });
      });
  };

  return (
    <div className="edit-user-form">
      <EditForm
        userData={userData}
        userUpdate={userUpdate}
        setUserData={setUserData}
        roles={roles}
        user={user}
      />
    </div>
  );
}

function EditForm(props) {
  const { user, userUpdate, roles } = props;
  const { Option } = Select;

  const rol = [];
  for (let role of roles) {
    rol.push(<Option key={role.id_TipoUsuario}>{role.nombre}</Option>);
  }
  return (
    <Form className="form-edit" onFinish={userUpdate}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="TipoUsuario_id_TipoUsuario">
            <Select placeholder="Selecciona una rol">{rol}</Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="TipoUsuario_id_TipoUsuario">
            <Input value={user.id_Usuario} disabled></Input>
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
