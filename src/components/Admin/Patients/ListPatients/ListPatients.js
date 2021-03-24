import React, { useState } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import EditPatient from "../EditPatient";
import { deletePatient, getPatients } from "../../../../api/pacientes";
import { getAccessTokenApi } from "../../../../api/auth";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./ListPatients.scss";
const { confirm } = ModalAntd;

export default function ListPatients(props) {
  const { patients, setReloadPatients } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(true);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  //Nuevos useState para la barra buscadora
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const inputEl = useRef("");
  //Buscador de termino para la barra
  const getSearchTerm = () =>{
    props.searchKeyword(inputEl.current.value)
  };
//Funcion para manejar los terminos que aparezcan para el autocompletado de los pacientes
  const searchHandler = (searchTerm) =>{
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newPatients = patients.filter((contact)=> {
        return Object.values(contact
          .join(" "))
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setsearchResults(newPatients);
    }else{
      setsearchResults(patients);
    }
  };

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
        term = {searchTerm}
        searchKeyword = {searchHandler}
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
      <div className ="">
      <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
      </div>
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
                  Pronombre: ${patient.pronombre ? patient.pronombre : "..."}
                  Nombre:   ${patient.nombre ? patient.nombre : "..."} 
              `}
        description={`Rut: ${patient.RUT}, Genero: ${patient.genero}`}
      />
    </List.Item>
  );
}
