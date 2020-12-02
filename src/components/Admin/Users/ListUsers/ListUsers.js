import React from "react";
import { List } from "antd";
//import { getAccessTokenApi } from "../../../../api/auth";
import "./ListUsers.scss";

export default function ListUsers(props) {
  const { users } = props;

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch"></div>
      </div>

      <Users users={users} />
    </div>
  );
}

function Users(props) {
  const { users } = props;
  console.log(users);

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user) => <User user={user} />}
    />
  );
}

function User(props) {
  const { user } = props;

  return (
    <List.Item>
      <List.Item.Meta
        title={`
                ${user.nombre ? user.nombre : "..."} 
                ${user.nombre_social ? user.nombre_social : "..."}
            `}
        description={user.email}
      />
    </List.Item>
  );
}
