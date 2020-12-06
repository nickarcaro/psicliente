import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import {
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
  IdcardOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import useAuth from "../hooks/useAuth";
import "./LayoutAdmin.scss";
import LoadRoutes from "./LoadRoutes";
import Auth from "../pages/Auth";
import { logout } from "../api/auth";
import UdpLogo from "../assets/jpeg/logo.jpeg";
function LayoutAdmin(props) {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Content, Footer, Sider } = Layout;
  const { routes } = props;
  const { user, isLoading } = useAuth();

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  if (!user && !isLoading) {
    return (
      <>
        <Route path="/" component={Auth} />
        <Redirect to="/" />
      </>
    );
  }

  if (user && !isLoading) {
    const onCollapse = (collapsed) => {
      setCollapsed(collapsed);
    };
    return (
      <Layout
        className="layout-admin"
        style={{ marginLeft: collapsed ? "80px" : "200px" }}
      >
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <Link to="/">
            <img className="logo" src={UdpLogo} alt="clinica psicologica udp" />
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["/home"]}>
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
            <Menu.Item key="/" icon={<PoweroffOutlined />} onClick={logoutUser}>
              Cerrar Sesión
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header r className="layout-admin__header" />
          <Content>
            <div className="layout-admin__content">
              <LoadRoutes routes={routes} />
            </div>
          </Content>
          <Footer className="layout-admin__footer">
            clinica Psicológica UDP ©2020 Created by TICS II
          </Footer>
        </Layout>
      </Layout>
    );
  }
  return null;
}

export default withRouter(LayoutAdmin);
