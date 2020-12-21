import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import LoadRoutes from "./LoadRoutes";
import "./LayoutBasic.scss";
import UdpLogo from "../assets/jpeg/logo.jpeg";
function LayoutBasic(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <img className="logo" src={UdpLogo} alt="clinica psicologica udp" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="/home">
            <Link to={"/home"}>home</Link>
          </Menu.Item>
          <Menu.Item key="/contacto">
            <Link to={"/contacto"}>Contacto</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div className="site-layout-background">
          <h1>Plataforma de gestión de consultantes</h1>
          <LoadRoutes routes={routes} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Clínica Psicológica UDP ©2020 Created by TICS II
      </Footer>
    </Layout>
  );
}

export default withRouter(LayoutBasic);
