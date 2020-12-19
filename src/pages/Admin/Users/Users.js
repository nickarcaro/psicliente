import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsers } from "../../../api/user";
import ListUsers from "../../../components/Admin/Users/ListUsers";
import jwtDecode from "jwt-decode";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(false);
  const token = getAccessTokenApi();

  useEffect(() => {
    getUsers(token, true).then((response) => {
      setUsers(response.rows);
    });

    setReloadUsers(false);
  }, [token, reloadUsers]);

  return (
    <div>
      <ListUsers users={users} setReloadUsers={setReloadUsers} />
    </div>
  );
}
