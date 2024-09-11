import React, { useState } from 'react';
import {book, wa, left, truck, price, person, right, bookA, priceA, personA, truckA} from '../../assets/Assets'
import { Button, Layout, Menu, theme } from 'antd';
import KontenKatalog from '../../Pages/Katalog Pages/Konten Katalog/KontenKatalog';
const { Header, Sider, Content } = Layout;
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Tes from '../../Pages/Tes/Tes';

import './SiderComponent.css'
import BreadcrumbComponent from '../Breadcrumbs/Breadcrumbs-component';
import Katalog from '../Form/Form Katalog/Katalog';
import TabelKatalog from '../../Pages/Katalog Pages/Tabel Katalog/TabelKatalog';

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
            src={isActive('/')? truckA:truck}
            alt="truck icon"
          />
        ),
        label: <Link to="/" className={isActive('/') ? 'active-label' : 'default-label'}>Buat Pengiriman</Link>,
      },
    {
      key: '/tabel-katalog',
      icon: (
        <img
          src={isActive('/tabel-katalog')? bookA:book}
          alt="book"
        />
      ),
      label: <Link to='/tabel-katalog' className={isActive('/tabel-katalog') ? 'active-label' : 'default-label'}>Daftar Pengiriman</Link>,
    },
    {
      key: '/invoice',
      icon: (
        <img
          src={isActive('/invoice')?priceA:price}
          alt="book"
        />
      ),
      label: <Link to="/invoice" className={isActive('/invoice') ? 'active-label' : 'default-label'}>Daftar Invoice</Link>,
    },
    {
      key: '/akun',
      icon: (
        <img
          src={isActive('/akun')? personA:person}
          alt="book"
        />
      ),
      label: <Link to="/akun" className={isActive('/akun') ? 'active-label' : 'default-label'}>Akun</Link>,
    },
  ];

  return (
   
<Layout>
  <Sider trigger={null} collapsible collapsed={collapsed}>
    <Menu
      className="sider-menu"
      theme="light"
      mode="inline"
      selectedKeys={[location.pathname === '/']} // Highlight the current route
      items={menuItems} // Use items instead of children
    />
  </Sider>

  <Layout>
    <Header className="layout-header">
      <Button
        className="sider-toggle-button"
        icon={collapsed ? <img src={right} /> : <img src={left} />}
        onClick={() => setCollapsed(!collapsed)}
      />
    </Header>
    <Content className="layout-content">
      <BreadcrumbComponent className="breadcrumb-container" />
      <Katalog /> {/* Form */}
      <Routes>
        <Route path="/" element={<KontenKatalog />} /> {/* Konten Katalog */}
        <Route path="/tabel-katalog" element={<TabelKatalog />} />
      </Routes>
    </Content>
  </Layout>
</Layout>
      
  );
};
export default SiderComponent;
