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
  useEffect(() => {
    setUserData({
      TipoUsuario_id_TipoUsuario: user.TipoUsuario_id_TipoUsuario,
    });
  }, [user]);

  console.log(user);

  const userUpdate = async (e) => {
    e.preventDefault();
    const token = getAccessTokenApi();
    let userUpdate = userData;

    await updateUser(token, userUpdate, user.id_Usuario)
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
      />
    </div>
  );
}

function EditForm(props) {
  const { userData, setUserData, userUpdate, roles } = props;
  const { Option } = Select;

  const rol = [];
  for (let role of roles) {
    rol.push(
      <Option key={role.id_TipoUsuario} value={role.id_TipoUsuario}>
        {role.nombre}
      </Option>
    );
  }
  return (
    <Form className="form-edit" onSubmitCapture={userUpdate}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Seleccióna una rol"
              onChange={(e) =>
                setUserData({ ...userData, TipoUsuario_id_TipoUsuario: e })
              }
              value={userData.TipoUsuario_id_TipoUsuario}
            >
              {rol}
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
