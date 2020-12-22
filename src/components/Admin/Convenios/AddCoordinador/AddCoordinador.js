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

export default function AddCoordinador(props) {
  const { setIsVisibleModal, setReloadConsultants } = props;
  const [coordinadorData, setCoordinadorData] = useState({});

  const addCoordinator = () => {};

  return (
    <div className="add-user-form">
      <CoordinadorForm
        coordinadorData={coordinadorData}
        setCoordinadorData={setCoordinadorData}
        addCoordinator={addCoordinator}
      />
    </div>
  );
}

function CoordinadorForm(props) {
  const { coordinadorData, setCoordinadorData, addCoordinador } = props;
  const { Option } = Select;

  return (
    <Form>
      <Form.Item>
        <Select placeholder="convenio">
          <Option> convenio 1</Option>
          <Option> convenio 2</Option>
          <Option> convenio 3</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Input placeholder="nombre" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="apellido" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="cargo" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="correo" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="telefono" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="fono" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Coordinador
        </Button>
      </Form.Item>
    </Form>
  );
}
