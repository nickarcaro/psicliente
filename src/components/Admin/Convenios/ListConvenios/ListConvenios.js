import React, { useState } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import AddConvenio from "../AddConvenio";
import AddCoordinador from "../AddCoordinador";
import {
  EditOutlined,
  DeleteOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { getAccessTokenApi } from "../../../../api/auth";
export default function ListConvenios(props) {
  const {
    convenios,
    coordinador,
    instituciones,
    setReloadConvenios,
    setReloadCoordinador,
    setReloadInstituciones,
  } = props;

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const addConvenioModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Crear nuevo convenio");
    setModalContent(
      <AddConvenio
        setIsVisibleModal={setIsVisibleModal}
        setReloadConvenios={setReloadConvenios}
      />
    );
  };

  return (
    <div className="list-users">
      <div className="list-users__header">
        <Button type="primary" onClick={addConvenioModal}>
          Nuevo Convenio
        </Button>
      </div>

      <Convenios
        convenios={convenios}
        setIsVisibleModal={setIsVisibleModal}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
        setReloadConvenios={setReloadConvenios}
        instituciones={instituciones}
        coordinador={coordinador}
        setReloadInstituciones={setReloadInstituciones}
        setReloadCoordinador={setReloadCoordinador}
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

function Convenios(props) {
  const {
    convenios,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadConvenios,
    instituciones,
    setReloadInstituciones,
    coordinador,
    setReloadCoordinador,
  } = props;

  const addCoordinador = (convenio) => {
    setIsVisibleModal(true);
    setModalTitle("Crear nueva Instacia de Contacto");
    setModalContent(
      <AddCoordinador
        convenio={convenio}
        setIsVisibleModal={setIsVisibleModal}
        setReloadConvenios={setReloadConvenios}
      />
    );
  };

  return (
    <div>
      <h1> lista de Convenios:</h1>
      <List
        className="users-active"
        itemLayout="horizontal"
        dataSource={convenios}
        renderItem={(convenio) => (
          <Convenio
            convenio={convenio}
            setReloadConvenios={setReloadConvenios}
            addCoordinador={addCoordinador}
          />
        )}
      />
      <h1>Coordinadores</h1>
      <List
        className="users-active"
        itemLayout="horizontal"
        dataSource={coordinador}
        renderItem={(coordinador) => (
          <Coordinador
            coordinador={coordinador}
            setReloadCoordinador={setReloadCoordinador}
          />
        )}
      />
    </div>
  );
}

function Convenio(props) {
  const { convenio, setReloadConvenios, addCoordinador } = props;
  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => addCoordinador(convenio)}>
          <SolutionOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
                Nombre: ${convenio.nombre ? convenio.convenio : "..."},
                
            `}
        description={`kasjsdpsa`}
      />
    </List.Item>
  );
}

function Coordinador(props) {
  const { coordinador, setReloadCoordinador } = props;
  return (
    <List.Item actions={[]}>
      <List.Item.Meta
        title={`
                Nombre: ${coordinador.nombre ? coordinador.convenio : "..."},
                
            `}
        description={`kasjsdpsa`}
      />
    </List.Item>
  );
}
