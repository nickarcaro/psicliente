import React from "react";
import { Layout, Menu } from "antd";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import {
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
  AreaChartOutlined,
  PoweroffOutlined,
  ContactsOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { red } from "@ant-design/colors";
import useAuth from "../hooks/useAuth";
import LoadRoutes from "./LoadRoutes";
import Auth from "../pages/Auth";
import { logout } from "../api/auth";
import UdpLogo from "../assets/jpeg/logo.jpeg";
import { Input } from 'antd';


import "./LayoutAdmin.scss";
function LayoutAdmin(props) {
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
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            backgroundColor: `${red[6]}`,
          }}
        >
          <Link to="/">
            <img className="logo" src={UdpLogo} />
          </Link>
          
          <Menu
            theme="dark"
            mode="inline"
            style={{ backgroundColor: `${red[6]}` }}
          >
            <Menu.Item key="/home/perfil" icon={<AreaChartOutlined />}>
              <Link to="/home/perfil" style={{fontWeight: "bold"}}> Estadísticas </Link>
            </Menu.Item>
            <Menu.Item key="/home/consultantes" icon={<SolutionOutlined />}>
              <Link to="/home/consultantes" style={{fontWeight: "bold"}}> Consultantes </Link>
            </Menu.Item>
            <Menu.Item key="/home/usuarios" icon={<UserOutlined />}>
              <Link to="/home/usuarios" style={{fontWeight: "bold"}}> Usuarios </Link>
            </Menu.Item>
            <Menu.Item key="/home/pacientes" icon={<TeamOutlined />}>
              <Link to="/home/pacientes" style={{fontWeight: "bold"}}> Pacientes </Link>
            </Menu.Item>
            <Menu.Item key="/home/convenios" icon={<ContactsOutlined />}>
              <Link to="/home/convenios" style={{fontWeight: "bold"}}> Convenios </Link>
            </Menu.Item>
            <Menu.Item key="/home/derivaciones" icon={<AuditOutlined />}>
              <Link to="/home/derivaciones" style={{fontWeight: "bold"}}> Derivaciones </Link>
            </Menu.Item>
            <Menu.Item key="/" icon={<PoweroffOutlined />} onClick={logoutUser} style={{fontWeight: "bold"}}>
              Cerrar Sesión
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
            
              <LoadRoutes routes={routes} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            clinica Psicológica UDP ©2020 Created by TICS II
          </Footer>
        </Layout>
      </Layout>
    );
  }
  return null;
}

export default withRouter(LayoutAdmin);
