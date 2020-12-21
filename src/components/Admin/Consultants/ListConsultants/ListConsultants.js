import React, { useState, useEffect } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import EditConsultantForm from "../EditConsultantForm";
import AddConsultantForm from "../AddConsultantForm";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./ListConsultants.scss";
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePatient } from "../../../../api/pacientes";
const { confirm } = ModalAntd;

export default function ListConsultants(props) {
  const { consultants, setReloadConsultants } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const addConsultantModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Crear nueva consultante");
    setModalContent(
      <AddConsultantForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadConsultants={setReloadConsultants}
      />
    );
  };

  return (
    <div className="list-users">
      <div className="list-users__header">
        <Button type="primary" onClick={addConsultantModal}>
          Nuevo Consultante
        </Button>
      </div>

      <Consultants
        consultants={consultants}
        setIsVisibleModal={setIsVisibleModal}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
        setReloadConsultants={setReloadConsultants}
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

function Consultants(props) {
  const {
    consultants,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadConsultants,
  } = props;

  const editConsultant = (consultant) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar  ${consultant.edad ? consultant.edad : "..."}${
        consultant.sexo ? consultant.sexo : "..."
      }${consultant.genero ? consultant.genero : "..."}${
        consultant.intentos_contacto ? consultant.intentos_contacto : "..."
      }
      ${consultant.intentos_contacto ? consultant.intentos_contacto : "..."}
      ${consultant.convenio ? consultant.convenio : "..."}${
        consultant.tipo_institucion ? consultant.tipo_institucion : "..."
      }${consultant.prevision_salud ? consultant.prevision_salud : "..."}${
        consultant.motivo ? consultant.motivo : "..."
      }${consultant.estado ? consultant.estado : "..."}`
    );
    setModalContent(
      <EditConsultantForm
        consultant={consultant}
        setIsVisibleModal={setIsVisibleModal}
        setReloadConsultants={setReloadConsultants}
      />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={consultants}
      renderItem={(consultant) => (
        <Consultant
          consultant={consultant}
          editConsultant={editConsultant}
          setReloadConsultants={setReloadConsultants}
        />
      )}
    />
  );
}

function Consultant(props) {
  const { consultant, editConsultant, setReloadConsultants } = props;

  const showDeleteConfirm = () => {
    const accesToken = getAccessTokenApi();

    confirm({
      title: "Eliminando usuario",
      content: `¿Estas seguro que quieres eliminar a ${consultant.RUT}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletePatient(accesToken, consultant.consultant_id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadConsultants(true);
          })
          .catch((err) => {
            notification["error"]({
              message: err,
            });
          });
      },
    });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editConsultant(consultant)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={showDeleteConfirm}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
                Rut: ${
                  consultant.Paciente_RUT ? consultant.Paciente_RUT : "..."
                },
                Edad: ${consultant.edad ? consultant.edad : "..."}
            `}
        description={`Genero: ${consultant.genero}`}
      />
    </List.Item>
  );
}
