import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

function LayoutBasic(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
          <Menu.Item className="logo" key="/">
            <Link to={"/"}>logo</Link>
          </Menu.Item>
          <Menu.Item key="/home">
            <Link to={"/"}>Home</Link>
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

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default withRouter(LayoutBasic);
