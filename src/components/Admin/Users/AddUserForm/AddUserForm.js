import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  notification,
  Select,
  Tooltip,
  Row,
  Col,
} from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { signUpApi, getUsersRoles } from "../../../../api/user";
import {
  emailValidation,
  minLengthValidation,
} from "../../../../utils/formValidation";

export default function AddUserForm(props) {
  const { setIsVisibleModal, setReloadUsers } = props;
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    nombre: false,
    nombre_social: false,
    repeatPassword: false,
    TipoUsuario_id_TipoUsuario: false,
  });
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getUsersRoles().then((response) => {
      setRoles(response.rows);
    });
  }, []);

  const inputValidation = (values) => {
    const { email, password } = values;

    if (email) {
      setFormValid({ ...formValid, [email]: emailValidation(email) });
    }
    if (password) {
      setFormValid({ ...formValid, [password]: minLengthValidation(password) });
    }
  };

  const { Option } = Select;
  const rol = [];
  for (let role of roles) {
    rol.push(<Option key={role.id_TipoUsuario}>{role.nombre}</Option>);
  }

  const login = async (values) => {
    const {
      nombre,
      nombre_social,
      email,
      password,
      repeatPassword,
      TipoUsuario_id_TipoUsuario,
    } = values;

    if (
      !email ||
      !password ||
      !repeatPassword ||
      !nombre_social ||
      !nombre ||
      !nombre_social
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      if (password !== repeatPassword) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales.",
        });
      } else {
        const user = {
          nombre,
          nombre_social,
          email,
          password,
          TipoUsuario_id_TipoUsuario,
        };

        const result = await signUpApi(user);

        if (result.msg) {
          notification["error"]({
            message: result.msg,
          });
        } else {
          notification["success"]({
            message: result.message,
          });
          setIsVisibleModal(false);
          setReloadUsers(true);

          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setFormValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };
  return (
    <Form name="normal_login" className="form-add" onFinish={login}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="nombre"
            rules={[{ required: true, message: "Favor ingresar nombre!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nombre"
              type="text"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="nombre_social"
            rules={[
              { required: true, message: "Favor ingresar nombre social!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nombre Social"
              type="text"
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="como quieres que te llamemos?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Favor ingresar correo electrónico!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Correo electrónico"
              onChange={inputValidation}
              type="email"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="TipoUsuario_id_TipoUsuario">
            <Select placeholder="Seleccionar Rol" type="number">
              {rol}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Favor ingresar contraseña!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              onChange={inputValidation}
              placeholder="Contraseña"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="repeatPassword"
            rules={[{ required: true, message: "Favor repetir contraseña!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              onChange={inputValidation}
              placeholder="Contraseña"
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}
