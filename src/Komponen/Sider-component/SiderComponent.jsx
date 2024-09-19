import React, { useState } from 'react';
import { book, truck, price, person, left, right, bookA, truckA, priceA, personA } from '../../assets/Assets';
import { Button, Layout, Menu } from 'antd';
import { Link, useLocation, Routes, Route } from 'react-router-dom';

import './SiderComponent.css';
import BreadcrumbComponent from '../Breadcrumbs/Breadcrumbs-component';
import Katalog from '../Form/Form Katalog/Katalog';
import KontenKatalog from '../../Pages/Katalog Pages/Konten Katalog/KontenKatalog';
import TabelKatalog from '../../Pages/Katalog Pages/Tabel Katalog/TabelKatalog';
import DetailInformasi from '../../Pages/Detail Informasi/DetailInformasi';
import DetailPage from '../../Pages/Detail Informasi/DetailPage';

const { Header, Sider, Content } = Layout;

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Helper function to determine if a path is active
  const isActive = (path) => location.pathname === path;

  // Menu items
  const menuItems = [
    {
      key: '/',
      icon: <img src={isActive('/') ? truckA : truck} alt="truck icon" />,
      label: <Link to="/" className={isActive('/') ? 'active-label' : 'default-label'}>Cari Pengiriman</Link>,
    },
    {
      key: '/tabel-katalog',
      icon: <img src={isActive('/tabel-katalog') ? bookA : book} alt="book" />,
      label: <Link to="/tabel-katalog" className={isActive('/tabel-katalog') ? 'active-label' : 'default-label'}>Daftar Pengiriman</Link>,
    },
    {
      key: '',
      icon: <img src={isActive('') ? priceA : price} alt="invoice" />,
      label: <Link to="" className={isActive('') ? 'active-label' : 'default-label'}>Daftar Invoice</Link>,
    },
    {
      key: '/akun',
      icon: <img src={isActive('/akun') ? personA : person} alt="account" />,
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
          selectedKeys={[location.pathname]} // Highlight the current route
          items={menuItems}
        />
      </Sider>

      <Layout>
        <Header className="layout-header">
          <Button
            className="sider-toggle-button"
            icon={collapsed ? <img src={right} alt="Expand" /> : <img src={left} alt="Collapse" />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="layout-content">
  <BreadcrumbComponent className="breadcrumb-container" />
  {location.pathname !== '/tabel-katalog/detail-informasi' && <Katalog />}

  <Routes>
    <Route path="/" element={<KontenKatalog />} />
    <Route path="/tabel-katalog" element={<TabelKatalog />} />
    <Route path="/tabel-katalog/detail-informasi" element={<><DetailInformasi /><DetailPage /></>} />
  </Routes>
</Content>

      </Layout>
    </Layout>
  );
};

export default SiderComponent;
