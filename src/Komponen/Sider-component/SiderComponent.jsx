import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {book, wa, left} from '../../assets/Assets'
import { Button, Layout, Menu, theme } from 'antd';
import Katalog from '../../Pages/Katalog Pages/Katalog';
const { Header, Sider, Content } = Layout;
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Tes from '../../Pages/Tes/Tes';

import './SiderComponent.css'

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // Mengambil URL aktif

  // Helper function untuk menentukan apakah path aktif
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    {
        key: '/',
        icon: (
          <img
            src={isActive('/')? wa:book}
            alt="Katalog Icon"
          />
        ),
        label: <Link to="/" className={isActive('/') ? 'active-label' : 'default-label'}>Katalog</Link>,
      },
    {
      key: '/tes',
      icon: (
        <img
          src={isActive('/tes')? wa:book}
          alt="Katalog Icon"
        />
      ),
      label: <Link to="/tes" className={isActive('/tes') ? 'active-label' : 'default-label'}>Tes</Link>,
    },
  ];

  return (
   
<Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
        style={{
            background:'white',
            height:'100%'
        }}
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname === '/']} // Highlight the current route
          items={menuItems} // Use items instead of children
        />
        </Sider>

        <Layout>
        <Header
          style={{
            padding: 0,
            background: 'white',
          }}
        >
          <Button
            icon={collapsed ? <img src={left}/> : <img src={left}/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '20px',
              border:'solid',
              borderRadius: '100%',
              borderWidth: 1,
              borderColor:'rgb(187, 187, 187, 0.3)',
              marginLeft:'-1vw',
            }}
          />
        </Header>
        <Content
          style={{
            minHeight: '100vh',
            background: 'white',
          }}
        >
          <Routes>
        <Route path="/" element={<Katalog />} />
        <Route path="/tes" element={<Tes />} />
      </Routes>
        </Content>
      </Layout>
        </Layout>
      
  );
};
export default SiderComponent;
