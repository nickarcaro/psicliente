import React from "react";
import { Layout } from "antd";
import "./Navbar.scss";
const Navbar = () => {
  const { Header } = Layout;
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <p className="nombre-usuario">
        Hola <span>nico </span>
      </p>
    </Header>
  );
};

export default Navbar;
