import React from "react";
import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";
import { Layout } from "antd";

import "./Dashboard.scss";

const Dashboard = () => {
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Navbar />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {" "}
            contenido
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
