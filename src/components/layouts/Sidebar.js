import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
  IdcardOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
const Sidebar = () => {
  const { Sider } = Layout;

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        collapsible
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/home/perfil"]}>
          <Menu.Item key="/home/perfil" icon={<IdcardOutlined />}>
            <Link to="/home/perfil"> Mi Perfil </Link>
          </Menu.Item>
          <Menu.Item key="/home/consultantes" icon={<SolutionOutlined />}>
            <Link to="/home/consultantes"> Consultantes </Link>
          </Menu.Item>
          <Menu.Item key="/home/usuarios" icon={<UserOutlined />}>
            <Link to="/home/usuarios"> Usuarios </Link>
          </Menu.Item>
          <Menu.Item key="/home/pacientes" icon={<TeamOutlined />}>
            <Link to="/home/pacientes"> Pacientes </Link>
          </Menu.Item>
          <Menu.Item key="/" icon={<PoweroffOutlined />}>
            <Link to="/"> Cerrar Sesión </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
