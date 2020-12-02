import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import LoadRoutes from "./LoadRoutes";
import "./LayoutBasic.scss";
function LayoutBasic(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/home"]}>
          <Menu.Item key="/home">
            <Link to={"/home"}>Home</Link>
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
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <LoadRoutes routes={routes} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default withRouter(LayoutBasic);
