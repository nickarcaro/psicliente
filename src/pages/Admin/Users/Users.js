import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsers } from "../../../api/user";
import ListUsers from "../../../components/Admin/Users/ListUsers";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getUsers(token, true).then((response) => {
      //console.log(response.rows);
      setUsers(response.rows);
    });

    setReloadUsers(false);
  }, [token, reloadUsers]);
  console.log(users);

  return (
    <div>
      <ListUsers users={users} />
    </div>
  );
}
