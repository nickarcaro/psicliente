import React, { useState } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import EditConsultantForm from "../EditConsultantForm";
import AddConsultantForm from "../AddConsultantForm";
import AddContactForm from "../AddContactForm";

import {
  EditOutlined,
  DeleteOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import "./ListConsultants.less";
import { getAccessTokenApi } from "../../../../api/auth";
import { deletePatient } from "../../../../api/pacientes";
const { confirm } = ModalAntd;

export default function ListConsultants(props) {
  const {
    consultants,
    setReloadConsultants,
    inpatients,
    setReloadInPatients,
  } = props;
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
        inpatients={inpatients}
        setReloadInPatients={setReloadInPatients}
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
    inpatients,
    setReloadInPatients,
  } = props;

  const editConsultant = (consultant) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar  ${consultant.nombre ? consultant.apellido : "..."}${
        consultant.nombre_social ? consultant.pronombre : "..."
      }${consultant.RUT ? consultant.RUT : "..."}${
        consultant.genero ? consultant.genero : "..."
      }
      ${consultant.fecha_nacimiento ? consultant.fecha_nacimiento : "..."}
      ${consultant.fecha_ingreso ? consultant.fecha_ingreso : "..."}${
        consultant.sexo ? consultant.sexo : "..."
      }${consultant.Estado_id_Estado ? consultant.Estado_id_Estado : "..."}${
        consultant.PrevisionSalud_id_PrevisionSalud
          ? consultant.PrevisionSalud_id_PrevisionSalud
          : "..."
      }`
    );
    setModalContent(
      <EditConsultantForm
        consultant={consultant}
        setIsVisibleModal={setIsVisibleModal}
        setReloadConsultants={setReloadConsultants}
      />
    );
  };

  const addContact = (consultant) => {
    setIsVisibleModal(true);
    setModalTitle("Crear nueva Instacia de Contacto");
    setModalContent(
      <AddContactForm
        consultant={consultant}
        setIsVisibleModal={setIsVisibleModal}
        setReloadConsultants={setReloadConsultants}
      />
    );
  };

  return (
    <div>
      <h1> lista de Consultantes:</h1>
      <List
        className="users-active"
        itemLayout="horizontal"
        dataSource={consultants}
        renderItem={(consultant) => (
          <Consultant
            consultant={consultant}
            editConsultant={editConsultant}
            setReloadConsultants={setReloadConsultants}
            addContact={addContact}
          />
        )}
      />
      <h1>lista de "Al Agua"</h1>
      <List
        className="users-active"
        itemLayout="horizontal"
        dataSource={inpatients}
        renderItem={(consultant) => (
          <Consultant
            consultant={consultant}
            editConsultant={editConsultant}
            setReloadConsultants={setReloadInPatients}
            addContact={addContact}
          />
        )}
      />
    </div>
  );
}

function Consultant(props) {
  const {
    consultant,
    editConsultant,
    setReloadConsultants,
    addContact,
  } = props;

  const showDeleteConfirm = () => {
    const accesToken = getAccessTokenApi();

    confirm({
      title: "Eliminando usuario",
      content: `¿Estas seguro que quieres eliminar a ${consultant.RUT}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletePatient(accesToken, consultant.RUT)
          .then((response) => {
            notification["success"]({
              message: response.message,
            });
            setReloadConsultants(true);
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
        <Button type="primary" onClick={() => addContact(consultant)}>
          <SolutionOutlined />
        </Button>,
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
                Rut: ${consultant.RUT ? consultant.RUT : "..."},
                Nombre: ${consultant.nombre ? consultant.nombre : "..."}
                ${consultant.apellido ? consultant.apellido : "..."}
            `}
        description={`Genero: ${consultant.genero},
                      Intentos de contacto: ${consultant.intentos_contacto}
                    `}
      />
    </List.Item>
  );
}
