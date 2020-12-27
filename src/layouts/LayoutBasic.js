import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import { HomeOutlined, ContactsOutlined } from "@ant-design/icons";
import LoadRoutes from "./LoadRoutes";
import UdpLogo from "../assets/jpeg/logo.jpeg";
import { red } from "@ant-design/colors";
import "./LayoutBasic.scss";

function LayoutBasic(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: `${red[6]}`,
        }}
      >
        <img className="logo" src={UdpLogo} alt="clinica psicologica udp" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ backgroundColor: `${red[6]}` }}
        >
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to={"/home"}> Home</Link>
          </Menu.Item>
          <Menu.Item key="/contacto" icon={<ContactsOutlined />}>
            <Link to={"/contacto"}>Contacto</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Title level={3} style={{ textAlign: "center", margin: 23 }}>
          Plataforma de Gestión de Consultantes
        </Title>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <LoadRoutes routes={routes} />
        </div>
      </Content>
      <Footer className="basicfooter" style={{ textAlign: "center" }}>
        Clínica Psicológica UDP ©2020 Created by TICS II
      </Footer>
    </Layout>
  );
}

export default withRouter(LayoutBasic);
