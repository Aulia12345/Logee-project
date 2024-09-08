import React from "react";
import { Layout } from "antd";
import HeaderComponent from "../Header-component/HeaderComponent";
import SiderComponent from "../Sider-component/SiderComponent";
import "./layout.css";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;

  return (
    <Layout>
      {/* Sider berada di samping kiri */}
     <HeaderComponent/>
      <SiderComponent />
    
    </Layout>
  );
};

export default LayoutComponent;
