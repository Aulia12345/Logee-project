import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import LayoutComponent from './Komponen/Layout/Layout'; // Import LayoutComponent
import DetailInformasi from './Pages/Detail Informasi/DetailInformasi';
import DetailPage from './Pages/Detail Informasi/DetailPage';
import TabelKatalog from './Pages/Katalog Pages/Tabel Katalog/TabelKatalog';
import TabelFilter from './Pages/Katalog Pages/Filter/TabelFilter';
import KontenKatalog from './Pages/Katalog Pages/Konten Katalog/KontenKatalog';
import BuatPesanan from './Pages/Buat Pesanan/BuatPesanan';

const App = () => {

  const location = useLocation();

  return (
    <div>
    <LayoutComponent>
    <Routes>
      <Route path="/" element={<KontenKatalog />} />
      <Route path="/filter" element={<TabelFilter />} />
      <Route path="/tabel-katalog" element={<TabelKatalog />} />
      <Route path="/tabel-katalog/detail-informasi/:id" element={<><DetailInformasi /><DetailPage /></>} />
      <Route path='/buat-pesanan' element={<BuatPesanan/>}/>
    </Routes>
    </LayoutComponent>
  </div>
  );
};

export default App;

