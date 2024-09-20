import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import LayoutComponent from './Komponen/Layout/Layout'; // Import LayoutComponent
import DetailInformasi from './Pages/Detail Informasi/DetailInformasi';
import DetailPage from './Pages/Detail Informasi/DetailPage';
import TabelKatalog from './Pages/Katalog Pages/Tabel Katalog/TabelKatalog';
import Katalog from './Komponen/Form/Form Katalog/Katalog';
import KontenKatalog from './Pages/Katalog Pages/Konten Katalog/KontenKatalog';

const App = () => {

  const location = useLocation();

  return (
    <div>
    <LayoutComponent>
    <Routes>
      <Route path="/" element={<KontenKatalog />} />
      <Route path="/tabel-katalog" element={<TabelKatalog />} />
      <Route path="/tabel-katalog/detail-informasi/:id" element={<><DetailInformasi /><DetailPage /></>} />
    </Routes>
    </LayoutComponent>
  </div>
  );
};

export default App;

