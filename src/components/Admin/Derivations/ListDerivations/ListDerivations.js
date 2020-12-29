import React, { useState } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import { getAccessTokenApi } from "../../../../api/auth";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddDerivationForm from "../AddDerivationForm";
import Derivations from "../../../../pages/Admin/Derivations/Derivations";
export default function ListDerivations(props) {
  const {
    motivos,
    coordinadores,
    rutconsultants,
    derivaciones,
    reloadCoordinadores,
    reloadRutConsultants,
    setReloadDerivaciones,
    reloadMotivos,
  } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const addDerivationModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Asignar nueva derivacion");
    setModalContent(
      <AddDerivationForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadDerivaciones={setReloadDerivaciones}
        motivos={motivos}
        coordinadores={coordinadores}
        rutconsultants={rutconsultants}
      />
    );
  };

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch">
          <Button type="primary" onClick={addDerivationModal}>
            Asignar nueva derivacion
          </Button>
        </div>
      </div>

      <Derivaciones
        derivaciones={derivaciones}
        setIsVisibleModal={setIsVisibleModal}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
        setReloadDerivaciones={setReloadDerivaciones}
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

function Derivaciones(props) {
  const {
    derivaciones,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadDerivaciones,
  } = props;

  return (
    <div>
      <h1> lista de Derivaciones:</h1>
      <List
        className="users-active"
        itemLayout="horizontal"
        dataSource={derivaciones}
        renderItem={(derivacion) => (
          <Derivation
            derivacion={derivacion}
            setReloadDerivaciones={setReloadDerivaciones}
          />
        )}
      />
    </div>
  );
}

function Derivation(props) {
  const { derivacion, setReloadDerivaciones } = props;

  return (
    <List.Item actions={[]}>
      <List.Item.Meta
        title={`
                 rut de la derivacion:${derivacion.Paciente_RUT}
                
            `}
      />
    </List.Item>
  );
}
