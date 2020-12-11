import React, { useState } from "react";
import { List, Button } from "antd";
import Modal from "../../../Modal";
import { EditOutlined } from "@ant-design/icons";
import EditUserForm from "../EditUserForm";

//import { getAccessTokenApi } from "../../../../api/auth";
import "./ListUsers.scss";

export default function ListUsers(props) {
  const { users, setReloadUsers } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch"></div>
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
    setModalTitle(`Editar Rol: ${user.rol.nombre ? user.rol.nombre : "..."}`);
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
      renderItem={(user) => <User user={user} editUser={editUser} />}
    />
  );
}

function User(props) {
  const { user, editUser } = props;

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editUser(user)}>
          <EditOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
               Nombre: ${user.nombre ? user.nombre : "..."} ,
               Nombre Social: ${user.nombre_social ? user.nombre_social : "..."}
              `}
        description={`Correo: ${user.email}`}
      />
    </List.Item>
  );
}
