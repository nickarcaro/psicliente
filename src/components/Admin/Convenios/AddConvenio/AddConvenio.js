import React, { useState } from "react";
import moment from "moment";
import locale from "antd/es/date-picker/locale/es_ES";
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
import { UserOutlined } from "@ant-design/icons";
import { addConvenio } from "../../../../api/convenios";
import { getAccessTokenApi } from "../../../../api/auth";

export default function AddConvenio(props) {
  const { setIsVisibleModal, setReloadConvenios, instituciones } = props;
  const [convenioData, setConvenioData] = useState({});

  //estado bool, fecha_inicio date, nombre, tipo institucion
  const addConv = (e) => {
    if (
      !convenioData.nombre ||
      !convenioData.estado ||
      !convenioData.fecha_inicio
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessTokenApi();

      addConvenio(accesToken, convenioData)
        .then((response) => {
          notification["success"]({
            message: response.message,
          });
          setIsVisibleModal(false);
          setReloadConvenios(true);
          setConvenioData({});
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
      <ConvenioForm
        convenioData={convenioData}
        setConvenioData={setConvenioData}
        addConv={addConv}
        instituciones={instituciones}
      />
    </div>
  );
}

function ConvenioForm(props) {
  const { convenioData, setConvenioData, addConv, instituciones } = props;
  const { Option } = Select;
  const institucion = [];

  for (let institutions of instituciones) {
    institucion.push(
      <Option
        key={institutions.id_TipoInstitucion}
        value={institutions.id_TipoInstitucion}
      >
        {institutions.nombre}
      </Option>
    );
  }

  return (
    <Form className="form-add" onSubmitCapture={addConv}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombre"
              value={convenioData.nombre}
              onChange={(e) =>
                setConvenioData({ ...convenioData, nombre: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              placeholder="fecha de inicio"
              locale={locale}
              format="DD/MM/YYYY "
              value={
                convenioData.fecha_inicio && moment(convenioData.fecha_inicio)
              }
              onChange={(e, value) =>
                setConvenioData({
                  ...convenioData,
                  fecha_inicio: moment(value, "DD/MM/YYYY").toISOString(),
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Select
            placeholder="estado"
            onChange={(e) => setConvenioData({ ...convenioData, estado: e })}
            value={convenioData.estado}
          >
            <Option value="0">no</Option>
            <Option value="1">si</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Instituciòn"
              onChange={(e) =>
                setConvenioData({
                  ...convenioData,
                  TipoInstitucion_id_TipoInstitucion: e,
                })
              }
              value={convenioData.TipoInstitucion_id_TipoInstitucion}
            >
              {institucion}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Convenio
        </Button>
      </Form.Item>
    </Form>
  );
}
