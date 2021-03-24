import React, { useState } from "react";
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EditUserForm from "../EditUserForm";
import AddUserForm from "../AddUserForm";
import { deleteUser } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";
import "./ListUsers.scss";

const { confirm } = ModalAntd;
export default function ListUsers(props) {
  const { users, setReloadUsers } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const addUserModal = () => {
    setIsVisibleModal(true);
    setModalTitle("crear nuevo usuario");
    setModalContent(
      <AddUserForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      />
    );
  };

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch"></div>
        <Button type="primary" onClick={addUserModal}>
          Nuevo Usuario
        </Button>
      </div>

      <Users
        users={users}
        setIsVisibleModal={setIsVisibleModal}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
        setReloadUsers={setReloadUsers}
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

function Users(props) {
  const {
    users,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadUsers,
  } = props;

  const editUser = (user) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${
        user.TipoUsuario_id_TipoUsuario
          ? user.TipoUsuario_id_TipoUsuario
          : "..."
      }`
    );
    setModalContent(
      <EditUserForm
        user={user}
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user) => (
        <User user={user} setReloadUsers={setReloadUsers} editUser={editUser} />
      )}
    />
  );
}

function User(props) {
  const { user, editUser, setReloadUsers } = props;

  const showDeleteConfirm = () => {
    const accesToken = getAccessTokenApi();

    confirm({
      title: "Eliminando usuario",
      content: `¿Estas seguro que quieres eliminar a ${user.email}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteUser(accesToken, user.id_Usuario)
          .then((response) => {
            notification["success"]({
              message: response.message,
            });
            setReloadUsers(true);
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
        <Button type="primary" onClick={() => editUser(user)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={showDeleteConfirm}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
                Nombre: ${user.nombre ? user.nombre : "..."} 
               Nombre Social ${user.nombre_social ? user.nombre_social : "..."}
              `}
        description={`Correo: ${user.email}`}
      />
    </List.Item>
  );
}
