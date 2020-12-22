import React, { useState } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import EditPatient from "../EditPatient";
import { deletePatient } from "../../../../api/pacientes";
import { getAccessTokenApi } from "../../../../api/auth";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./ListPatients.scss";
const { confirm } = ModalAntd;

export default function ListPatients(props) {
  const { patients, setReloadPatients } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch">
          <h1>Lista De pacientes</h1>
        </div>
      </div>

      <Patients
        patients={patients}
        setIsVisibleModal={setIsVisibleModal}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
        setReloadPatients={setReloadPatients}
      />

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function Patients(props) {
  const {
    patients,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadPatients,
  } = props;

  const editPatient = (patient) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${patient.RUT ? patient.RUT : "..."} ${
        patient.nombre ? patient.nombre : "..."
      }
      ${patient.nombre_social ? patient.nombre_social : "..."}
      ${patient.pronombre ? patient.pronombre : "..."}
      ${patient.genero ? patient.genero : "..."}
      ${patient.apellido ? patient.apellido : "..."}
      ${patient.fecha_ingreso ? patient.fecha_ingreso : "..."}
      ${patient.intentos_contacto ? patient.intentos_contacto : "..."}
      ${patient.Estado_id_Estado ? patient.Estado_id_Estado : "..."}
      ${
        patient.PrevisionSalud_id_PrevisionSalud
          ? patient.PrevisionSalud_id_PrevisionSalud
          : "..."
      }
      ${patient.fecha_nacimiento ? patient.fecha_nacimiento : "..."}
      ${patient.sexo ? patient.sexo : "..."}`
    );
    setModalContent(
      <EditPatient
        patient={patient}
        setIsVisibleModal={setIsVisibleModal}
        setReloadPatients={setReloadPatients}
      />
    );
  };

  return (
    <div>
      <h1> lista de Pacientes:</h1>
      <List
        className="users-active"
        itemLayout="horizontal"
        dataSource={patients}
        renderItem={(patient) => (
          <Patient
            patient={patient}
            editPatient={editPatient}
            setReloadPatients={setReloadPatients}
          />
        )}
      />
    </div>
  );
}

function Patient(props) {
  const { patient, editPatient, setReloadPatients } = props;
  const showDeleteConfirm = () => {
    const accesToken = getAccessTokenApi();
    console.log("paciente rut:", patient.RUT);
    confirm({
      title: "Eliminando Paciente",
      content: `¿Estas seguro que quieres eliminar a ${patient.nombre}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletePatient(accesToken, patient.RUT)
          .then((response) => {
            notification["success"]({
              message: response.message,
            });
            setReloadPatients(true);
          })
          .catch((err) => {
            notification["error"]({
              message: err.msg,
            });
          });
      },
    });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editPatient(patient)}>
          <EditOutlined />
        </Button>,

        <Button type="danger" onClick={showDeleteConfirm}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
                  ${patient.pronombre ? patient.pronombre : "..."}
                  ${patient.nombre ? patient.nombre : "..."} 
              `}
        description={patient.RUT}
        description={patient.genero}
      />
    </List.Item>
  );
}
