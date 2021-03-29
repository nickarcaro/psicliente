import React from "react";
import { Layout, Menu, Breadcrumb, BackTop } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import LoadRoutes from "./LoadRoutes";
import "./LayoutBasic.less";

const LayoutBasic = ({ routes, location }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logoPrincipal" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/">
            <Link to={"/"}>
              <HomeOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item key="/contacto">
            <Link to={"/contacto"}>Contacto</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "50px 50px 100px ", marginTop: 60 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <LoadRoutes routes={routes} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>proyecto tics 3 2021</Footer>
    </Layout>
  );
};

export default LayoutBasic;

/*
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import LoadRoutes from "./LoadRoutes";
import "./LayoutBasic.less";
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
*/
