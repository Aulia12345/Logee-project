import React from 'react';
import { Breadcrumb } from 'antd';
import { truck, book, price, person } from '../../assets/Assets'; // Tambahkan logo lainnya di sini
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs-component.css';

// Map yang menghubungkan rute dengan breadcrumb teks dan logo
const breadcrumbConfig = {
  '/': {
    text: 'Buat Pengiriman / Cari Armada Pengiriman',
    logo: truck,
  },
  '/tabel-katalog': {
    text: 'Daftar Pengiriman / Buat Daftar Pengiriman',
    logo: book,
  },
  '/invoice': {
    text: 'Daftar Invoice / List Daftar Invoice',
    logo: price,
  },
  '/akun': {
    text: 'Akun / Lihat Profil',
    logo: person,
  },
};

const BreadcrumbComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Ambil konfigurasi breadcrumb untuk path saat ini
  const breadcrumbConfigForCurrentPath = breadcrumbConfig[currentPath];

  // Jika rute tidak ditemukan dalam config, tampilkan null (bisa disesuaikan sesuai kebutuhan)
  if (!breadcrumbConfigForCurrentPath) return null;

  const breadcrumbText = breadcrumbConfigForCurrentPath.text;
  const breadcrumbParts = breadcrumbText.split(' / '); // Membagi bagian sebelum dan sesudah slash
  const logo = breadcrumbConfigForCurrentPath.logo;

  // Konfigurasi items untuk Breadcrumb
  const items = [
    {
      title: (
        <Link to={currentPath === '/' ? '/' : '/'}>
          <img src={logo} alt="breadcrumb logo" className="breadcrumb-logo" />
          {breadcrumbParts[0]}
        </Link>
      ),
    },
    {
      title: <span className="active-label">{breadcrumbParts[1]}</span>,
    },
  ];

  return <Breadcrumb className="breadcrumbC" items={items} />;
};

export default BreadcrumbComponent;
